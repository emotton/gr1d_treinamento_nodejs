/* Promessa podem ser tratadas em grupo, mas e se ocorrer reject ? */

function espera_ai5(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`[${n}] obrigado por aguardar (5) ...`)
            if( n == 2 ){
                resolve(true);
            } else {
                reject("Deu ruim")
            }
        }, 5000);
    })
}
function espera_ai10(n){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`[${n}] obrigado por aguardar (10) ...`)
            if( n == 1 ){
                resolve(true);
            } else {
                reject("Deu ruim")
            }
        }, 10000);
    })
}

const ret1 = espera_ai10(1)
const ret2 = espera_ai5(2)
const ret3 = espera_ai10(3)
const ret4 = espera_ai5(4)

// Processos de 10 segundos
Promise.all([ret1, ret3]).then((valores)=>{
    console.log('log chegaram os resultados do banco de dados Oracle')
    console.log(valores)
}).catch((err) =>{
    console.log("Deu algum problema : ", err);
});

// Processos de 5 segundos
Promise.all([ret2, ret4]).then((valores)=>{
    console.log('log chegaram os resultados do banco de dados SQL Server')
    console.log(valores)
}).catch((err) =>{
    console.log("Deu algum problema : ", err);
});


