const buf = Buffer.from('test', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

console.log(buf.toString('utf8'));


const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from('tést');

const buf6 = Buffer.from('tést', 'latin1');

var bu = Buffer.alloc(256);

var len = bu.write('www.test.com');
console.log(len);

var buffer = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buffer[i] = i + 97;
}

console.log( buffer.toString('ascii'));
console.log( buffer.toString('ascii',0,5));
console.log( buffer.toString('utf8',0,5));
console.log( buffer.toString(undefined,0,5));


const buffernode = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buffernode);

console.log(json);


const copy = JSON.parse(json, (key, value) => {

    console.log('log:  ' + value);

    return value && value.type == 'Buffer' ?
        Buffer.from(value.data) : value;
});

console.log(copy);


var buffer01 = Buffer.from(('fresh man '));
var buffer02 = Buffer.from(('old man '));

var buffer03 = Buffer.concat([buffer01, buffer02]);
console.log("Buffer 03: " + buffer03.toString());

var result = buffer01.compare(buffer02);

console.log(result);


buffer01.copy(buff2, 1);

buffer01.splice(0, 1);
