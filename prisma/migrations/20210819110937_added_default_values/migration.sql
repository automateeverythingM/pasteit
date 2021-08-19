-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Text" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "expires" INTEGER NOT NULL DEFAULT 3600000,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Text" ("created_at", "expires", "id", "text") SELECT "created_at", "expires", "id", "text" FROM "Text";
DROP TABLE "Text";
ALTER TABLE "new_Text" RENAME TO "Text";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
