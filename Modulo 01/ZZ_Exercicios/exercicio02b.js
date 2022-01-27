const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcs = [];

function cadastrar() {
  rl.question("Cadastrar ? ", function (fim) {
    if (fim.toLocaleLowerCase() != "n") {
      rl.question("Nome ? ", function (nome) {
        rl.question("Data de Nascimento dd/mm/aaaa ? ", function (data) {
          rl.question("Cargo ? ", function (cargo) {
            rl.question("Sexo (M/F) ? ", function (sexo) {
              funcs.push({
                nome: nome,
                dataNascto: data,
                cargo: cargo,
                sexo: sexo
              });
              cadastrar();
            });
          });
        });
      });
    } else {
      rl.close();
    }
  });
}

cadastrar();

rl.on("close", function () {
  console.log(funcs);
  process.exit(0);
});
