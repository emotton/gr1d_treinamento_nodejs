const { createReadStream } = require("fs");

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk);
  }
}

const readable = createReadStream("./stream.txt", { encoding: "utf8" });
logChunks(readable);
