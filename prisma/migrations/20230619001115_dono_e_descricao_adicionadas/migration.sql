/*
  Warnings:

  - Added the required column `descricao` to the `UserEmpresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dono` to the `UserEmpresa` table without a default value. This is not possible if the table is not empty.

*/
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
    "descricao" TEXT NOT NULL,
    "dono" TEXT NOT NULL
);
INSERT INTO "new_UserEmpresa" ("email", "endereco", "horario", "id", "nomeEmpresa", "numero", "periodo", "senha", "tipoServico") SELECT "email", "endereco", "horario", "id", "nomeEmpresa", "numero", "periodo", "senha", "tipoServico" FROM "UserEmpresa";
DROP TABLE "UserEmpresa";
ALTER TABLE "new_UserEmpresa" RENAME TO "UserEmpresa";
CREATE UNIQUE INDEX "UserEmpresa_email_key" ON "UserEmpresa"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
