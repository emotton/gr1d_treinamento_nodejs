const util = require('util');
const dados = require('./data.js');
let clientes = dados();
let quantidade = 10;

for(cliente of clientes){
    for(pedido of cliente.pedidos){
        pedido.valor_total = quantidade*pedido.valor;
    }
}

console.log(util.inspect(clientes, {showHidden: false, depth: 3}));
module.exports = clientes;