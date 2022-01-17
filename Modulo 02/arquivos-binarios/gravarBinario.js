const fs = require('fs');

const mensagem = "Hello Binary World"

const buffer = Buffer.from(mensagem);
fs.writeFileSync('./teste.bin', buffer, 'binary');