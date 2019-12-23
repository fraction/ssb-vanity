const ssbVanity = require('../.')

const myKeys = ssbVanity((keys) =>
  keys.public.startsWith('SSB')
)

console.log(myKeys)
