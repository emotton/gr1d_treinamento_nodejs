/* Dando certo ou errado, e no final ? */

function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            resolve(true);
        }, 5000);
    })
}

espera_ai().then(()=>{
    console.log('Acho que tudo deu certo ...');
}).catch(err => {
    console.log('Algo deu errado ? ', err)
}).finally(()=>{
    console.log('ao final, volte sempre ...');
})
