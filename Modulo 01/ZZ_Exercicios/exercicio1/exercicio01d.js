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

const carrosX = [];
for(var i=0; i<carros.length; i++){
    carrosX.push({
        nome: carros[i].nome,
        idade: 2022 - carros[i].ano
    })
}

console.log(carrosX);