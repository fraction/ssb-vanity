# SSB-Vanity

> Generate custom vanity public keys for Secure Scuttlebutt (SSB).

## Usage

```javascript
const ssbVanity = require('ssb-vanity')

const myKeys = ssbVanity((keys) =>
  keys.public.startsWith('SSB')
)

console.log(myKeys)
```

```javascript
{
  curve: 'ed25519',
  public: 'SSBzcRZYPjtP5rSIezMgHKiSU0lgdKcJnoHOt0ZFvo4=.ed25519',
  private: 'aCXph8K5LqiqS3G2nWYQhPAEH4WzLiHoUL7uYpr/yttJIHNxFlg+O0/mtIh7MyAcqJJTSWB0pwmegc63RkW+jg==.ed25519',
  id: '@SSBzcRZYPjtP5rSIezMgHKiSU0lgdKcJnoHOt0ZFvo4=.ed25519'
}
```

## Installation

With [npm](https://npmjs.org/):

```shell
npm install ssb-vanity
```

With [yarn](https://yarnpkg.com/en/):

```shell
yarn add ssb-vanity
```

## License

AGPL-3.0

