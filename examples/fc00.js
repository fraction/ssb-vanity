const ssbVanity = require('../.')
const crypto = require('crypto')

let addr

const myKeys = ssbVanity((keys) => {
  addr = crypto
    .createHash('sha512')
    .update(keys.public)
    .digest('hex')
    .slice(0, 32)
    .match(/.{1,4}/g)
    .join(':')

  return addr.startsWith('fc')
})

console.log(myKeys)
console.log(addr)
