/* Criação de uma promessa, uma promessa deve-se contar com ela */

function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            resolve(true);
        }, 5000);
    })
}

console.log(espera_ai())
console.log('ao final, volte sempre ...')