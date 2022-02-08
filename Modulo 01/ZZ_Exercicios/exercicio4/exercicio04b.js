const util = require('util');

let clientes = require('./dados-exercicio04');

console.table(clientes);
console.dir(JSON.stringify(clientes));

console.log(util.inspect(clientes, {showHidden: false, depth: 3}));
