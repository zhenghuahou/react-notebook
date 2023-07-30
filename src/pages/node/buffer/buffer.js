const { Buffer } = require('node:buffer');

const buf6 = Buffer.from('tést');
const t2 = buf6.slice(1);


console.log('buf16:', buf6,buf6.toString());
console.log('t2:', t2,t2.toString());


// const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72, 0x61, 0x79, 0x79, 0x79, 0x79, 0x61]);

// const buf2 = Buffer.from([0, 0, 0, 5]);

// const buf3 = Buffer.allocUnsafe(4);

// buf3.writeInt32BE(0x01020304, 0);

// console.log('buf1:', buf1,buf1.toString());
// console.log('buf2:', buf2,buf2.toString());
// console.log('readInt32BE(4):', buf1.readInt32BE(4).toString(16), ' buf1.toString():', buf1.toString(), 'buf1.length:', buf1.length, 'buf2.length:', buf2.length);
// console.log('buf3:', buf3, ' buf3.length:', 'buf3.length:', buf3.length, '十进制:', buf3.readInt32BE(), '16进制:', buf3.readInt32BE().toString(16));


// /*执行结果:
// buf1: <Buffer 62 75 66 66 65 72 61 79 79 79 79 61>
// buf2: <Buffer 00 00 00 05>
// readInt32BE(4): 65726179  buf1.toString(): bufferayyyya buf1.length: 12 buf2.length: 4
// buf3: <Buffer 01 02 03 04>  buf3.length: buf3.length: 4 十进制: 16909060 16进制: 1020304
// */

// const head = Buffer.alloc(8);
// head.writeUInt32BE(2345);//2345转化为16进制为929
// head.writeUInt32BE(10891);//10891转化为16进制为2a8b
// console.info('head:',head)
// //head: <Buffer 00 00 09 29 00 00 2a 8b>
 