-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_satelliteId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "satelliteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_satelliteId_fkey" FOREIGN KEY ("satelliteId") REFERENCES "Satellite"("id") ON DELETE SET NULL ON UPDATE CASCADE;
