let nome:string;

nome = "Eduardo";

console.log(nome);

let idade:number;

idade = 51;

console.log(idade);


interface ICliente {
    nome:string;
    email:string;
}

function enviarEmail(cliente:ICliente){
    console.log(`Enviado email para ${cliente.email}`);
}

enviarEmail({nome:"Eduardo", email:"emotton@gmail.com"});

let idiomas: Array<string> = [];

idiomas.push('Inglês');
idiomas.push('Alemão');
idiomas.push('Português');
idiomas.push('Frances');
idiomas.push('Japones');

console.log(idiomas);
console.log(idiomas.length);
