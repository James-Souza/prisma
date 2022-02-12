-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "characterPower" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "darksteel" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "mp" TEXT NOT NULL,
    "physicalATK" TEXT NOT NULL,
    "physicalDEF" TEXT NOT NULL,
    "speelDEF" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Wallets" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "draco" TEXT NOT NULL,
    "hydra" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_id_key" ON "Characters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wallets_id_key" ON "Wallets"("id");
