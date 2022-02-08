const fs = require('fs')

const dados = require('./dados');

fs.writeFile('./dados.txt', JSON.stringify(dados),  'utf-8', (err)=>{
    if(!err){
        console.log('arquivo escrito')
    } else {
        console.log('Ocorreu um erro na leitura do arquivo', err)
    }
});

console.log('*************** Ao final exibe essa linha ******************')