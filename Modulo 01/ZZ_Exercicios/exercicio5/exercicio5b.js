let { alunos, notas } = require('./dados');

console.table(alunos);
console.table(notas);

processar();

function processar(){
	for(aluno of alunos){}
        aluno.media = [];
        notas.forEach(nota => {
            nota.provas.forEach(prova => {
                if(prova.idAluno == aluno.id){
                    aluno.media.push(Number(Number((prova.notas[0]+prova.notas[1]+prova.notas[2]+prova.notas[3])/4).toFixed(1)));
                }
            })
        })
        aluno.aprovado = true;
        for(var i=0; i<aluno.media.length; i++){
            if(aluno.media[i]<7){
                aluno.aprovado = false;
                break;
            }
        }
    });
    return alunos;
}

console.table(alunos);