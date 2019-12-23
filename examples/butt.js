const ssbVanity = require('../.')

const myKeys = ssbVanity((keys) =>
  keys.public.toLowerCase().startsWith('butt')
)

console.log(myKeys)
