/* Vixi, se der algum erro eu não vejo nada ? */

const fs = require('fs')

const dados = require('./dados');

const escreverArquivo = file => new Promise((resolve, reject) =>{
    fs.writeFile(file, JSON.stringify(dados), 'utf-8', (err)=>{
        if(err){
            reject(err);
        }
        resolve({ status: true});
    });
});

(async () => {
    try {
        await escreverArquivo('./dados2.txt')
        await escreverArquivo('./dados3.txt')
        await escreverArquivo('./dados1.txt')
        console.log('************** Ao final exibe essa linha ******************')
    } catch(err){
        console.log("Deu erro : ", err)
    }
})();