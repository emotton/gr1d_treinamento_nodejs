module.exports = {
    alunos: [
        {id: 1, nome: 'Pedro', curso: 'Ciência de Dados', media: 0, aprovado: false},
        {id: 2, nome: 'Fabiane', curso: 'Analise de Sistemas', media: 0, aprovado: false},
        {id: 3, nome: 'Max', curso: 'Engenharia de Software', media: 0, aprovado: false},
        {id: 4, nome: 'Leonardo', curso: 'Ciência de Dados', media: 0, aprovado: false},
        {id: 5, nome: 'Amanda', curso: 'Controle de Qualidade', media: 0, aprovado: false}
    ],
    notas: [
        {id: 1, professor: 'Eduardo', disciplina: 'Linguagem de Programação e Lógica',
            provas: [
                {idAluno: 1, notas: [ 8, 6, 9.2, 7 ]},
                {idAluno: 2, notas: [ 6.5, 9, 5, 10 ]},
                {idAluno: 3, notas: [ 5.9, 6.5, 8, 9 ]},
                {idAluno: 4, notas: [ 5, 8.2, 8.1, 4.5 ]},
                {idAluno: 5, notas: [ 5.5, 6.9, 8.3, 9 ]}
            ]
        }, 
        {id: 2, professor: 'Joãozinho', disciplina: 'Desenvolvimento Backend',
            provas: [
                {idAluno: 1, notas: [ 7.5, 8.5, 6.2, 7 ]},
                {idAluno: 2, notas: [ 5.3, 9, 5, 7 ]},
                {idAluno: 3, notas: [ 5, 6.5, 8, 8 ]},
                {idAluno: 4, notas: [ 7, 6.4, 8, 9.5 ]},
                {idAluno: 5, notas: [ 8, 7.2, 8.2, 6.5 ]}
            ]
        }
    ]
}