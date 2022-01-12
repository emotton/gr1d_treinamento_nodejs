var soma = function(x,y){
    return x + y;
}
// Função criada para multiplicar dois valores
var multiplicacao = function(x,y){
    return x * y;
}

// Função que recebe outra função e chama dentro dela
function calcular(funcao, x, y){
    console.log(funcao(x,y));
}

// Chamando a função calcula passando qual função eu quero executar
calcular(soma, 23, 76);
calcular(multiplicacao, 23, 76);
calcular(function(x,y){
    return x - y;
}, 176, 16);