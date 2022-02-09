/*
  Warnings:

  - Added the required column `characterPower` to the `Characters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Characters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "characterPower" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "darksteel" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Characters" ("createdAt", "darksteel", "email", "id", "level", "name", "updateAt") SELECT "createdAt", "darksteel", "email", "id", "level", "name", "updateAt" FROM "Characters";
DROP TABLE "Characters";
ALTER TABLE "new_Characters" RENAME TO "Characters";
CREATE UNIQUE INDEX "Characters_id_key" ON "Characters"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
