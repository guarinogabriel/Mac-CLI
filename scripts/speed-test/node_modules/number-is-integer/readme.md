# number-is-integer [![Build Status](https://travis-ci.org/sindresorhus/number-is-integer.svg?branch=master)](https://travis-ci.org/sindresorhus/number-is-integer)

> ES2015 [`Number.isInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save number-is-integer
```


## Usage

```js
var numberIsInteger = require('number-is-integer');

numberIsInteger(1);
//=> true

numberIsInteger(1.5);
//=> false
```


## Related

- [is-safe-integer](https://github.com/sindresorhus/is-safe-integer) - ES2015 `Number.isSafeInteger()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
