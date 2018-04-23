var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt.gz');
readStream.setEncoding('UTF8');
readStream.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('inputunzip.txt'));

console.log('decompress is finish');