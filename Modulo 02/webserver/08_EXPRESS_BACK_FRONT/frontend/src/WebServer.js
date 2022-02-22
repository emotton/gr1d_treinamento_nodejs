const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const axios = require("axios");
const formData = require('express-form-data');

app.use(formData.parse());

// Permite utilizaçao de JSON no BODY
app.use(express.json());

app.use(express.urlencoded({ extended: true}))

// Permite utilizar o handlebars como template engine
var hbs = handlebars.create({
  defaultLayout: "main",
  partialsDir: [path.join(__dirname, "views/partials")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "src/views");

const port = 8080;

app.get("/clientes", (req, res) => {
  axios.get("http://localhost:3000/clientes").then((response) => {
    res.render("site/clientes/index", {
      layout: "main",
      clientes: response.data,
    });
  });
});

app.get("/clientes/novo", (req, res)=>{
    res.render("site/clientes/create");
});

app.post("/clientes", (req, res)=>{
    axios.post("http://localhost:3000/clientes", { id: req.body.id, nome: req.body.nome }).then(()=>{
        res.redirect("/clientes");
    });
});

app.get("/produtos", (req, res) => {
  axios.get("http://localhost:3000/produtos").then((response) => {
    res.render("site/produtos/index", {
      layout: "main2",
      produtos: response.data,
    });
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Servidor esta rodando ${port}`);
});
