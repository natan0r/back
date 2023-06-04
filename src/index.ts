import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

//GET CLIENTE
app.get("/", async function (req, res) {
  const userClientes = await prisma.userCliente.findMany();

  res.json(userClientes);
});

//GET EMPRESA
app.get("/empresa", async function (req, res) {
  const userEmpresas = await prisma.userEmpresa.findMany();

  res.json(userEmpresas);
});

//=======================================================================
//POST
app.post("/", async function (req, res) {
  const {
    nomeCompleto,
    dataNascimento,
    CEP,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    email,
    senha,
  } = req.body;

  const newUserCliente = await prisma.userCliente.create({
    data: {
      nomeCompleto,
      dataNascimento: new Date(dataNascimento),
      CEP,
      rua,
      numero: Number(numero),
      bairro,
      cidade,
      estado,
      email,
      senha,
    },
  });
  res.json(newUserCliente);
});

// POST EMPRESA
app.post("/empresa", async function (req, res) {
  const {
    nomeEmpresa,
    endereco,
    periodo,
    horario,
    tipoServico,
    numero,
    email,
    senha,
  } = req.body;

  const newUserEmpresa = await prisma.userEmpresa.create({
    data: {
      nomeEmpresa,
      endereco,
      periodo,
      horario,
      tipoServico,
      numero: Number(numero),
      email,
      senha,
    },
  });
  res.json(newUserEmpresa);
});

//POST LOGIN
app.post("/login", async function (req, res) {
  const { email, senha } = req.body;

  const newUserCliente = await prisma.userCliente.findFirst({
    where: {
      email,
      senha,
    },
  });

  const newUserEmpresa = await prisma.userEmpresa.findFirst({
    where: {
      email,
      senha,
    },
  });
  res.json(newUserCliente || newUserEmpresa);
});

//=================================================================
//PUT
app.put("/:id", async function (req, res) {
  const { id } = req.params;

  const {
    nomeCompleto,
    dataNascimento,
    CEP,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    email,
    senha,
  } = req.body;

  const updatedUserCliente = await prisma.userCliente.update({
    where: {
      id: Number(id),
    },
    data: {
      nomeCompleto,
      dataNascimento: new Date(dataNascimento),
      CEP,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      email,
      senha,
    },
  });
  res.json(updatedUserCliente);
});

//POST EMPRESA
app.put("/empresa/:id", async function (req, res) {
  const { id } = req.params;
  const {
    nomeEmpresa,
    endereco,
    periodo,
    horario,
    tipoServico,
    numero,
    email,
    senha,
  } = req.body;

  const updatedUserEmpresa = await prisma.userEmpresa.update({
    where: {
      id: Number(id),
    },
    data: {
      nomeEmpresa,
      endereco,
      periodo,
      horario,
      tipoServico,
      numero: Number(numero),
      email,
      senha,
    },
  });
  res.json(updatedUserEmpresa);
});

//====================================================================
//DELETE
app.delete("/:id", async function (req, res) {
  const { id } = req.params;

  await prisma.userCliente.delete({
    where: {
      id: Number(id),
    },
  });
  res.json();
});

//DELETE EMPRESA
app.delete("/empresa/:id", async function (req, res) {
  const { id } = req.params;

  await prisma.userEmpresa.delete({
    where: {
      id: Number(id),
    },
  });
  res.json();
});

app.listen(8081, function () {
  console.log("Servidor abriu");
});
