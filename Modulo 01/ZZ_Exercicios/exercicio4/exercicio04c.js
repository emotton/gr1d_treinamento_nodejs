const util = require('util');

let clientes = require('./dados-exercicio04');

for(var i=0; i<clientes.length; i++){
    for(var i1=0; i1<clientes[i].pedidos.length; i1++){
        clientes[i].pedidos[i1] = 
        { ...clientes[i].pedidos[i1], 
        valor_total: clientes[i].pedidos[i1].quantidade * 
        clientes[i].pedidos[i1].valor_unitario };
    }
}

console.table(clientes);
console.dir(JSON.stringify(clientes));

console.log(util.inspect(clientes, {showHidden: false, depth: 3}));
