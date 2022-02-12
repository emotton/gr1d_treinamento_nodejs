const express = require('express');
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const util = require('util');

const app = express();

// Configurações (Antes das Rotas)
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

const swaggerOptions = {
    definition: {
        info: {
            title: 'API Clientes',
            version: '1.0.0'
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: ['./src/routes/**/*.js']
}

const swagger = swaggerJsDoc(swaggerOptions);

console.log(util.inspect(swagger, {showHidden: false, depth: 9}));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));

// Rotas
const routesCliente = require('./routes/cliente.routes');

app.use('/cliente', routesCliente);

app.get('/swagger.json', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});