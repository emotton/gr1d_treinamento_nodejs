/* Uma promessa pode dar erro, e ai ? */

function espera_ai(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('obrigado por aguardar ...')
            reject("Deu ruim");
        }, 5000);
    })
}

espera_ai().then(()=>{
    console.log('Acho que tudo deu certo ...');
}).catch(err => {
    console.log('Algo deu errado ? ', err)
})
