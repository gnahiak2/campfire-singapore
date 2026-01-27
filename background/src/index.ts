import 'dotenv/config';
import Airtable from 'airtable';
import { prisma } from './prisma';
import { error } from 'node:console';

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
    endpointUrl: 'https://api.airtable.com',
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID!);
const eventsTable = base('events');

export async function listOfEventWebsiteData() {
    return (await eventsTable.select({
        view: 'Everything',
        // filterByFormula: '{website_active} = 1',
        fields: [
            'slug', //string
            'website_json', //string
            'website_active' //boolean
        ]
    }).all())
}

const POLL_INTERVAL = parseInt(process.env.AIRTABLE_POLL_INTERVAL || '300000', 10);

const VERSION = 2;

class AirtableSyncWorker {
    private intervalId: NodeJS.Timeout | null = null;
    private isRunning = false;

    async syncEvents() {
        console.log(`[${new Date().toISOString()}] Starting Airtable sync...`);
        
        try {
            const records = await listOfEventWebsiteData();

            console.log(`Fetched ${records.length} active events from Airtable`);

            // Delete records not in Airtable first to free up slugs
            const deleteResult = await prisma.satellite.deleteMany({
                where: {
                    recordId: {
                        notIn: records.map(r => r.id),
                    },
                },
            });
            if (deleteResult.count > 0) {
                console.log(`Deleted ${deleteResult.count} records no longer in Airtable`);
            }

            // Parse all records first
            const parsedRecords = records
                .map(record => {
                    const slug = record.get('slug') as string;
                    const websiteJson = record.get('website_json') as string;
                    const websiteActive = record.get('website_active') === true;

                    if (!slug) {
                        console.warn(`Skipping record ${record.id}: missing slug`);
                        return null;
                    }

                    let data: any;
                    try {
                        data = websiteJson ? JSON.parse(websiteJson) : {};
                        if (websiteActive && data.version !== VERSION) {
                            data = { error: "Your JSON is outdated. Please update it!" };
                        }
                    } catch {
                        console.error(`Error parsing JSON for slug ${slug}`);
                        data = { error: "Error parsing JSON. Make sure the JSON is valid!" };
                    }

                    return { recordId: record.id, slug, data, active: websiteActive };
                })
                .filter((r): r is NonNullable<typeof r> => r !== null);

            // Check for duplicate slugs in Airtable data and skip them
            const slugCounts = new Map<string, string[]>();
            for (const r of parsedRecords) {
                const existing = slugCounts.get(r.slug) || [];
                existing.push(r.recordId);
                slugCounts.set(r.slug, existing);
            }
            const duplicateSlugs = new Set<string>();
            for (const [slug, recordIds] of slugCounts) {
                if (recordIds.length > 1) {
                    console.error(`Duplicate slug "${slug}" found in Airtable for records: ${recordIds.join(', ')} - skipping all`);
                    duplicateSlugs.add(slug);
                }
            }
            const deduplicatedRecords = parsedRecords.filter(r => !duplicateSlugs.has(r.slug));

            // Fetch existing records by recordId
            const existingRecords = await prisma.satellite.findMany({
                where: { recordId: { in: deduplicatedRecords.map(r => r.recordId) } },
            });
            const existingByRecordId = new Map(existingRecords.map(r => [r.recordId, r]));

            const toCreate: typeof deduplicatedRecords = [];
            const toUpdate: { id: number; data: typeof deduplicatedRecords[0] }[] = [];

            for (const record of deduplicatedRecords) {
                const existing = existingByRecordId.get(record.recordId);
                if (existing) {
                    toUpdate.push({ id: existing.id, data: record });
                } else {
                    toCreate.push(record);
                }
            }

            // Batch create
            if (toCreate.length > 0) {
                await prisma.satellite.createMany({ data: toCreate });
                console.log(`✓ Created ${toCreate.length} new records`);
            }

            // Batch update (Prisma doesn't support batch update, so we do it in parallel)
            if (toUpdate.length > 0) {
                await Promise.all(
                    toUpdate.map(({ id, data }) =>
                        prisma.satellite.update({
                            where: { id },
                            data: {
                                slug: data.slug,
                                data: data.data,
                                active: data.active,
                                updatedAt: new Date(),
                            },
                        })
                    )
                );
                console.log(`✓ Updated ${toUpdate.length} existing records`);
            }

            console.log(`[${new Date().toISOString()}] Sync completed successfully`);
        } catch (error) {
            console.error(`[${new Date().toISOString()}] Sync failed:`, error);
        }
    }

    async start() {
        if (this.isRunning) {
            console.warn('Airtable sync worker already running');
            return;
        }

        this.isRunning = true;
        console.log(`Starting Airtable sync worker (interval: ${POLL_INTERVAL}ms)`);
        
        await this.syncEvents();
        
        this.intervalId = setInterval(async () => {
            await this.syncEvents();
        }, POLL_INTERVAL);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.isRunning = false;
        console.log('Airtable sync worker stopped');
    }
}

export const airtableSyncWorker = new AirtableSyncWorker();

airtableSyncWorker.start();
