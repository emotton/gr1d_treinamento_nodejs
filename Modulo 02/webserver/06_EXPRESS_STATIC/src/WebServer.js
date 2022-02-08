const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');

// Configurações
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// public
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'parkhenri-icone.gif')));

app.get("/", (req,res)=>{
    res.send('Hello Site');
});

app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000');
});





