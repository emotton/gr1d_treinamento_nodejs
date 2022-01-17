var fs = require("fs");
var wstream = fs.createWriteStream("./stream.txt");
wstream.write("Hello world!\n");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("continuar ? ", function (continuar) {
  wstream.write("Another line\n");
  rl.close();
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  wstream.end();
  process.exit(0);
});
