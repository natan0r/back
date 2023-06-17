-- CreateTable
CREATE TABLE "Reserva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataHora" DATETIME NOT NULL,
    "telefone" TEXT NOT NULL,
    "userClienteId" INTEGER NOT NULL,
    "userEmpresaId" INTEGER NOT NULL,
    CONSTRAINT "Reserva_userClienteId_fkey" FOREIGN KEY ("userClienteId") REFERENCES "UserCliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_userEmpresaId_fkey" FOREIGN KEY ("userEmpresaId") REFERENCES "UserEmpresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
