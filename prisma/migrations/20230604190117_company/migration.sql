-- CreateTable
CREATE TABLE "UserEmpresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeEmpresa" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "tipoServico" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserEmpresa_email_key" ON "UserEmpresa"("email");
