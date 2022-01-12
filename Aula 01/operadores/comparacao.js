/* Comparação  "==" */

let v1 = 100;
let v2 = "100";

if(v1 == v2){
    console.log("Somos iguais");
} else {
    console.log("Somos diferentes");
}

if(v1 === v2){
    console.log("Agora somos iguais");
} else {
    console.log("Agora somos diferentes");
}

let nome1 = "Eduardo";
let nome2 = 'eduardo';

console.log("nome1==nome2 =>", nome1==nome2);

let nome3 = "Eduardo Motton";
let nome4 = "Eduardo";

console.log("nome3==nome4 =>", nome3==nome4);

console.log("nome3.startsWith(nome4) =>", nome3.startsWith(nome4));