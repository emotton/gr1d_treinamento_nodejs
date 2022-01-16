/* Ainda bem que tem readFileSync */

const fs = require('fs')

const dados = fs.readFileSync('./arquivo1.txt', 'utf-8');

console.log(dados);

console.log('*************** Ao final exibe essa linha ******************')