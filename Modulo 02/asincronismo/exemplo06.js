/* Promessas dependentes (Efeito Haduken) */

function espera_ai(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`obrigado por aguardar [${n}] ...`)
            resolve(true);
        }, 5000);
    })
}

espera_ai(1).then(()=>{
    console.log('Acho que tudo deu certo ...');

    espera_ai(2).then(()=>{
        console.log('Acho que tudo deu certo ...');

        espera_ai(3).then(()=>{
            console.log('Acho que tudo deu certo ...');
        }).catch(err => {
            console.log('Algo deu errado ? ', err)
        }).finally(()=>{
            console.log('ao final, volte sempre ...');
        })

    }).catch(err => {
        console.log('Algo deu errado ? ', err)
    }).finally(()=>{
        console.log('Esse também chegou ao final ...');
    })

}).catch(err => {
    console.log('Algo deu errado ? ', err)
}).finally(()=>{
    console.log('Esse chegou ao final ...');
})
