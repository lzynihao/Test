var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function (){
    console.log('Stream end');
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('Program is finished');

var data = 'write stream';
var writeStream = fs.createWriteStream('input.txt');
writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function () {
    console.log('Write finish');
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('Write program is finish');