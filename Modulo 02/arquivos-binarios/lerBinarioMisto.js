const fs = require('fs');

const data = fs.readFileSync('./testeMisto.bin', 'binary');
const buf = Buffer.from(data, 'binary');

console.log(buf);

console.log('ID (97) => ', buf.readUInt8(0), buf.readUInt8(0).toString(16));
console.log('Versão (04) => ', buf.readUInt8(1), buf.readUInt8(1).toString(16));
console.log('123 => ', buf.readUInt32BE(2));
console.log('456 => ', buf.readUInt32BE(6));
console.log('status(1) =>', buf.readUInt8(10));
