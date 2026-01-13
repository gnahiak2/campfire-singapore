-- CreateTable
CREATE TABLE "Satellite" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Satellite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Satellite_slug_key" ON "Satellite"("slug");
