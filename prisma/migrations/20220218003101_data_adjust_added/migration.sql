/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Wallets` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `Wallets` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Characters` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `updatedAt` on the `Characters` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallets" (
    "email" TEXT NOT NULL,
    "draco" TEXT NOT NULL,
    "hydra" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Wallets" ("createdAt", "draco", "email", "hydra", "updatedAt") SELECT "createdAt", "draco", "email", "hydra", "updatedAt" FROM "Wallets";
DROP TABLE "Wallets";
ALTER TABLE "new_Wallets" RENAME TO "Wallets";
CREATE UNIQUE INDEX "Wallets_email_key" ON "Wallets"("email");
CREATE TABLE "new_Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "characterPower" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "darksteel" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "hp" TEXT NOT NULL,
    "mp" TEXT NOT NULL,
    "physicalATK" TEXT NOT NULL,
    "physicalDEF" TEXT NOT NULL,
    "speelDEF" TEXT NOT NULL
);
INSERT INTO "new_Characters" ("characterPower", "createdAt", "darksteel", "email", "hp", "id", "level", "mp", "name", "physicalATK", "physicalDEF", "speelDEF", "updatedAt") SELECT "characterPower", "createdAt", "darksteel", "email", "hp", "id", "level", "mp", "name", "physicalATK", "physicalDEF", "speelDEF", "updatedAt" FROM "Characters";
DROP TABLE "Characters";
ALTER TABLE "new_Characters" RENAME TO "Characters";
CREATE UNIQUE INDEX "Characters_id_key" ON "Characters"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
