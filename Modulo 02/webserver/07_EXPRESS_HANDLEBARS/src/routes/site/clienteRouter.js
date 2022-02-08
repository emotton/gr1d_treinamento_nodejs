const express = require('express');
const router = express.Router();

const {getClientes} = require('../../services/clientesService')

router.get("/", (req, res)=>{
    res.render("site/clientes",
    {clientes: getClientes()})
})

module.exports = router;