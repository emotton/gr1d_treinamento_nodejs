const util = require('util');
let c = require('./c.js');
function resumo(clientes){
    let resumo_clientes = [];
    let i = 0;
    for(cliente of clientes){
        // console.log(cliente);
        resumo_clientes.push({
            nome: cliente.nome,
            valor_total: 0
        });
        for(pedido of cliente.pedidos){
            resumo_clientes[i].valor_total += pedido.valor_total;
        }
        i++;
    }
    return resumo_clientes;
}


console.log(util.inspect(resumo(c), {showHidden: false, depth: 3}));