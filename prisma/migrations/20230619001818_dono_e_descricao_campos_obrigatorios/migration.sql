-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserEmpresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeEmpresa" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "tipoServico" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "descricao" TEXT,
    "dono" TEXT
);
INSERT INTO "new_UserEmpresa" ("descricao", "dono", "email", "endereco", "horario", "id", "nomeEmpresa", "numero", "periodo", "senha", "tipoServico") SELECT "descricao", "dono", "email", "endereco", "horario", "id", "nomeEmpresa", "numero", "periodo", "senha", "tipoServico" FROM "UserEmpresa";
DROP TABLE "UserEmpresa";
ALTER TABLE "new_UserEmpresa" RENAME TO "UserEmpresa";
CREATE UNIQUE INDEX "UserEmpresa_email_key" ON "UserEmpresa"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
