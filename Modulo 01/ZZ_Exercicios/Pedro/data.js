function geraClientes()
{ 
    var clientes = [
        {
            id : 1,  nome : "Spark", email:"spark@gmail.com"  
        },
        {
            id : 2, nome :"Park", email:"park@gmail.com"
        },
        {
            id : 3, nome:"jao", email:"jao@gr1d.io"
        }
    ];

    for(cliente of clientes){
        cliente.pedidos = [{
            data: '31/'+cliente.id+'/2022',
            produto: "api versão"+cliente.id+'.0.0',
            valor: (cliente.id+1)*4
        },
        {
            data: '31/'+cliente.id*2+'/2022',
            produto: "api versão"+cliente.id+'.0.0',
            valor: (cliente.id+1)*2*4
        },
        {
            data: '31/'+cliente.id*3+'/2022',
            produto: "api versão"+cliente.id+'.0.0',
            valor: (cliente.id+1)*4+3
        }]
    }

    return clientes;
}
module.exports = function() {return geraClientes()};
