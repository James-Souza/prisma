-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "initialValue" REAL NOT NULL,
    "initialTime" DATETIME NOT NULL,
    "finalValue" REAL NOT NULL,
    "finalTime" DATETIME NOT NULL,
    "serverDate" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Session" ("area", "character", "createdAt", "finalTime", "finalValue", "id", "initialTime", "initialValue", "serverDate", "status", "updatedAt") SELECT "area", "character", "createdAt", "finalTime", "finalValue", "id", "initialTime", "initialValue", "serverDate", "status", "updatedAt" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
