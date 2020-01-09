const ssbVanity = require('../.')

const regex = /^[lL][eE3][eE3][tT]/

const myKeys = ssbVanity(keys =>
  keys.public.match(regex) !== null
)

console.log(myKeys)

