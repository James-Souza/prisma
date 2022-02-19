/*
  Warnings:

  - Added the required column `serverDate` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "initialValue" REAL NOT NULL,
    "finalValue" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "serverDate" DATETIME NOT NULL
);
INSERT INTO "new_Session" ("area", "createdAt", "finalValue", "id", "initialValue", "name", "status", "updatedAt") SELECT "area", "createdAt", "finalValue", "id", "initialValue", "name", "status", "updatedAt" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
