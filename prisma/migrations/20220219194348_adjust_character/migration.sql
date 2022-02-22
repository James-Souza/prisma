-- CreateTable
CREATE TABLE "Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "characterPower" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "darksteel" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "mp" INTEGER NOT NULL,
    "physicalATK" INTEGER NOT NULL,
    "physicalDEF" INTEGER NOT NULL,
    "speelDEF" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Wallets" (
    "email" TEXT NOT NULL,
    "draco" INTEGER NOT NULL,
    "hydra" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Areas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "initialValue" REAL NOT NULL,
    "initialTime" DATETIME NOT NULL,
    "finalValue" REAL NOT NULL,
    "finalTime" DATETIME NOT NULL,
    "serverDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_id_key" ON "Characters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wallets_email_key" ON "Wallets"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Areas_id_key" ON "Areas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");
