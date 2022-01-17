const { createReadStream } = require('fs');

var readStream = createReadStream('./stream.txt');
readStream.setEncoding('utf-8');

let data = '';

readStream.on('data', chunk => (data += chunk))

readStream.on('open', () => {
  console.log('Stream opened...');
});

readStream.on('end', () => {
  console.log('Stream Closed...');
  console.log(data);
});