/* Promessas tratadas com async/await, ai preciso de uma função async */

function espera_ai(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`obrigado por aguardar [${n}] ...`);
      resolve(true);
    }, 5000);
  });
}

async function executar() {
  await espera_ai(1);
  console.log("Esse chegou ao final ...");
  await espera_ai(2);
  console.log("Esse também chegou ao final ...");
  await espera_ai(3);
  console.log("Agora acabou mesmo ...");
}

executar();