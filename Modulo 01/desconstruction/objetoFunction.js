let pessoa = {
    nome: "Eduardo",
    sobrenome: "Motton",
    idade: 51,
    sexo: 'M',
    vacinado: false
};

function informarVacina({nome, vacinado}){
    console.log(`${nome} ${vacinado?"":"não "}foi vacinado`);
}

informarVacina(pessoa);