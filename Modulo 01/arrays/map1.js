/* Efetua determinada operação sobre cada elemento do array */

/* Altera o próprio array */

const numeros = [1, 2, 3, 4, 5, 6];
const duplicar = x => x * 2;
const duplicados = numeros.map(duplicar);
console.log(duplicados)