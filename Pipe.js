var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
readStream.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('File compress is finish');



