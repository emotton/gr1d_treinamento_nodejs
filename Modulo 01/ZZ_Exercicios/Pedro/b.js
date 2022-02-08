function geraClientes()
{ 
    let clientes = [
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

    for(let i = 0; i< clientes.length; i++){
        clientes[i].pedidos = [{
            data: '31/'+i+'/2022',
            produto: "api versão"+i+'.0.0',
            valor: i*4
        },
        {
            data: '31/'+i*2+'/2022',
            produto: "api versão"+i+'.0.0',
            valor: i*2*4
        },
        {
            data: '31/'+i*3+'/2022',
            produto: "api versão"+i+'.0.0',
            valor: i*4+3
        }]
    }

    return clientes();
}