const ssbKeys = require('ssb-keys')

module.exports = (validator) => {
  let keys = ssbKeys.generate()

  while (validator(keys) !== true) {
    keys = ssbKeys.generate()
  }

  return keys
}
