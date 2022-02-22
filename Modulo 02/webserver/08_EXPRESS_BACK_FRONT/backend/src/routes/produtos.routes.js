const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(global.produtos);
});

// Criar um novo produto
router.post("/", (req,res)=>{
    res.send({success: true});
});

// Alterar um produto
router.put("/", (req,res)=>{
    res.send({success: true});
});

// Deletar um produto
router.delete("/", (req,res)=>{
    res.send({success: true});
});

module.exports = router;
