/* Array de Objetos */

let pessoas = [
    { 
        nome: 'Godofredo', 
        idade: 15, 
        vacinado: false
    },
    { nome: 'Vitor', idade: 19, vacinado: true},
    { nome: 'Rachel', idade: 35, vacinado: true},
]; 

console.log(pessoas);

let vitor = pessoas[1];

console.log(vitor.nome);
console.log(vitor.idade);