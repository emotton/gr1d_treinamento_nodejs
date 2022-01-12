/* Binários

1  1  1  1  1  1  1  1
                     2^0 =   1
                  2^1    =   2
               2^2       =   4
            2^3          =   8
         2^4             =  16
      2^5                =  32
   2^6                   =  64
2^7                      = 128

*/

let n1 = 10;
console.log("10 =>", n1.toString(2));  // "1010" (2^3 + 2^1) = (8 + 2) = 10

let n2 = 55
console.log("55 =>", n2.toString(2)); // "110111"

/*
10 = 001010
55 = 110111
*/

/* retorna "1" para posições de bit iguais */
let n3 = n1 & n2;
console.log("n1 & n2 =>", n3.toString(2));

/* caso um dos dois tiveram "1", retorna "1", se ambos tiverem "0", retorna "0" */
let n4 = n1 | n2;
console.log("n1 | n2 =>", n4.toString(2));

/* caso cada bit seja diferente retorna "1", caso contrário "0" */
let n5 = n1 ^ n2;
console.log("n1 ^ n2 =>", n5.toString(2));

// SHIFT BITS

/* Bits para a esquerda << */
let n6 = n1 << 1;
console.log("n1 << 1 =>", n6.toString(2));

let n7 = n6 << 1;
console.log("n6 << 1 =>", n7.toString(2));

/* Bits para a direita >> */
let n8 = n7 >> 2;
console.log("n7 >> 2 =>", n8.toString(2));