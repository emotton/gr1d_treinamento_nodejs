const express = require("express");
const app = express();

app.use(express.json());

// Rotas
const clientesRoutes = require('./routes/clientes.routes');
const produtosRoutes = require('./routes/produtos.routes');

app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

const port = 3000;

// mock
global.clientes = [
  { id: 1, nome: "Eduardo" },
  { id: 2, nome: "Henrique" },
  { id: 3, nome: "Akio" },
  { id: 4, nome: "Bheatriz" },
  { id: 5, nome: "Célia" },
];

global.produtos = [
  { id: 1, nome: "Notebook i7", valor: 8500.0 },
  { id: 2, nome: "Notebook i5", valor: 6500.0 },
  { id: 3, nome: "Monitor", valor: 3200.0 }
];

app.get('/', (req, res)=>{
    res.redirect('/clientes');
});

app.listen(port, () => {
  console.log(`Servidor esta rodando ${port}`);
});
