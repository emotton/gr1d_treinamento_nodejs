/* Ainda bem que tem writeFileSync */

const fs = require('fs')

const dados = require('./dados');

fs.writeFileSync('./dados1.txt', JSON.stringify(dados), 'utf-8');

console.log('*************** Ao final exibe essa linha ******************')