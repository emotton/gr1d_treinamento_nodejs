const carros = [
    { 
        nome: 'Opala', modelo: 'X', fabricante: 'GM', ano: 1990, cor: 'Cinza'
    }, 
    { 
        nome: 'Fusca', modelo: 'Y', fabricante: 'VW', ano: 1988, cor: 'Preto'
    }, 
    { 
        nome: 'Fiesta', modelo: 'Z', fabricante: 'Ford', ano: 2005, cor: 'Verde'
    }
];

const nomes = [];
for(var i=0; i<carros.length; i++){
    nomes.push(carros[i].nome);
}

console.log(nomes);