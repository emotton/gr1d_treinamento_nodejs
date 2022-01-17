const fs = require('fs');

const buf = Buffer.alloc(10);
buf.writeUInt8(0x61, 0); // ID (97)
buf.writeUInt8(0x04, 1); // Versão (04)
buf.writeUInt32BE(123, 2);
buf.writeUInt32BE(456, 6);
buf.writeUInt8(1, 10);

fs.writeFileSync('./testeMisto.bin', buf, 'binary');