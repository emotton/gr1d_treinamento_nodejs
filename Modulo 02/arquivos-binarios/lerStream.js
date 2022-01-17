const { createReadStream } = require('fs');

var readStream = createReadStream('./testeMisto.bin');
readStream.setEncoding('binary');

let data = '';

readStream.on('data', chunk => (data += chunk))

readStream.on('open', () => {
  console.log('Stream opened...');
});

readStream.on('end', () => {
  console.log('Stream Closed...');
  console.log(Buffer.from(data, 'binary'));
});