/* Olha o Promise.allSet */

const fs = require("fs");

const lerArquivo = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve({ data: data, status: true });
    });
  });

(async () => {
  const arq = await Promise.allSettled([
    lerArquivo("./arquivo1.txt"),
    lerArquivo("./arquivo2.txt"),
    lerArquivo("./arquivo3.txt"),
  ]);

  console.log(arq);

  if (arq[0].status == "fulfilled") {
    console.log("\n************ ARQUIVO[1] ***********\n");
    console.log(arq[0].value.data);
  } else {
    console.log("Algum problema no arquivo[1]");
    console.log(arq[0].reason);
  }

  if (arq[1].status == "fulfilled") {
    console.log("\n************ ARQUIVO[2] ***********\n");
    console.log(arq[1].value.data);
  } else {
    console.log("Algum problema no arquivo[2]");
    console.log(arq[1].reason);
  }

  if (arq[2].status == "fulfilled") {
    console.log("\n************ ARQUIVO[3] ***********\n");
    console.log(arq[2].value.data);
  } else {
    console.log("Algum problema no arquivo[3]");
    console.log(arq[2].reason);
  }
})();
