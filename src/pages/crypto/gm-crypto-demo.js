/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { SM4,SM2 } = require('gm-crypto')
// import {SM4} from 'gm-crypto'
let key = '0123456789abcdeffedcba9876543210' // Any string of 32 hexadecimal digits
let originalData = 'SM4 国标对称加密'

/**
 * Block cipher modes:
 * - ECB: electronic codebook
 * - CBC: cipher block chaining
 */

let encryptedData, decryptedData

/*
// ECB
encryptedData = SM4.encrypt(originalData, key, {
  inputEncoding: 'utf8',
  outputEncoding: 'hex'
})

//解密数据
decryptedData = SM4.decrypt(encryptedData, key, {
  inputEncoding: 'hex',
  outputEncoding: 'utf8'
})


console.info('加密 encryptedData:',encryptedData)
console.info('解密 decryptedData:',decryptedData)
// 加密 encryptedData: A9TLmWvl16D5xheKUxlINfhkGRQjPrHDukbYnKI82QI=
// 解密 decryptedData: SM4 国标对称加密
*/


/*
encryptedData = SM4.encrypt(originalData, key, {
  inputEncoding: 'utf8',
  outputEncoding: 'hex'
})

//解密数据
decryptedData = SM4.decrypt(encryptedData, key, {
  inputEncoding: 'hex',
  outputEncoding: 'utf8'
})

console.info('加密 encryptedData:',encryptedData)
console.info('解密 decryptedData:',decryptedData)
// 加密 encryptedData: 03d4cb996be5d7a0f9c6178a53194835f8641914233eb1c3ba46d89ca23cd902
// 解密 decryptedData: SM4 国标对称加密

*/



const { publicKey, privateKey } = SM2.generateKeyPair();
console.info(`publicKey:${publicKey.length}`,publicKey,` privateKey:${privateKey.length}:`,privateKey ) //每次调用生成的publicKey,privateKey都是会变的
const originalData2 = 'SM2 椭圆曲线公钥密码算法'

 const encryptedData2 = SM2.encrypt(originalData2, publicKey, {
  inputEncoding: 'utf8',
  outputEncoding: 'hex',
  pc:false,
}) //每次调用生成的encryptedData2内容都和上次生成的不一样

 const decryptedData2 = SM2.decrypt(encryptedData2, privateKey, {
  inputEncoding: 'hex',
  outputEncoding: 'utf8',
  pc:false,
})

console.info(` 加密 encryptedData2:${encryptedData2.length}`,encryptedData2)
console.info(` 解密  decryptedData2:${decryptedData2.length}`,decryptedData2)
