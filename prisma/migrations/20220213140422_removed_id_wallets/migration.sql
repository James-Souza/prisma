/*
  Warnings:

  - You are about to drop the column `id` on the `Wallets` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallets" (
    "email" TEXT NOT NULL,
    "draco" TEXT NOT NULL,
    "hydra" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL
);
INSERT INTO "new_Wallets" ("createdAt", "draco", "email", "hydra", "updatedAt") SELECT "createdAt", "draco", "email", "hydra", "updatedAt" FROM "Wallets";
DROP TABLE "Wallets";
ALTER TABLE "new_Wallets" RENAME TO "Wallets";
CREATE UNIQUE INDEX "Wallets_email_key" ON "Wallets"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
