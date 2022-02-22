const express = require("express");
const router = express.Router();

// Buscar todos os clientes
router.get("/", (req, res) => {
  res.send(global.clientes);
});

// Buscar um cliente pelo ID
router.get("/:id", (req, res) => {
  res.send(global.clientes.find((cliente) => cliente.id == req.params.id));
});

// Criar um novo cliente
router.post("/", (req, res) => {
  if (req.body.id && req.body.nome) {
    global.clientes.push({
      id: req.body.id,
      nome: req.body.nome,
    });

    res.send({ success: true });
  } else {
    res.status(400).send({ success: false, msg: "Falta ou ID ou NOME" });
  }
});

// Alterar um cliente
router.put("/:id", (req, res) => {
  global.clientes.forEach((c) => {
    if (c.id == req.params.id) {
      c.nome = req.body.nome;
    }
  });
  res.send({ success: true });
});

// Deletar um cliente
router.delete("/:id", (req, res) => {
  let i = global.clientes.length - 1;
  for (; i >= 0; i--) {
    if (global.clientes[i].id == req.params.id) {
      global.clientes.splice(i, 1);
    }
  }
  res.send({ success: true });
});

module.exports = router;
