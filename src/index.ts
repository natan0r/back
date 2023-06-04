import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

//GET
app.get("/", async function (req, res) {
  const userClientes = await prisma.userCliente.findMany();

  res.json(userClientes);
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

//POST LOGIN
app.post("/login", async function (req, res) {
  const { email, senha } = req.body;

  const newUserCliente = await prisma.userCliente.findFirst({
    where: {
      email,
      senha,
    },
  });
  res.json(newUserCliente);
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

app.listen(8081, function () {
  console.log("Servidor abriu");
});
