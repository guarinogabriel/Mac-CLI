# round-to [![Build Status](https://travis-ci.org/sindresorhus/round-to.svg?branch=master)](https://travis-ci.org/sindresorhus/round-to)

> Round a number to a specific number of decimal places: `1.234` → `1.2`


## Install

```
$ npm install --save round-to
```


## Usage

```js
var roundTo = require('round-to');

roundTo(1.234, 2);
//=> 1.23

roundTo.up(1.234, 2);
//=> 1.24

roundTo.down(1.234, 2);
//=> 1.23
```

Numbers are rounded to a specific number of significant figures. Specifying a negative precision will round to any number of places to the left of the decimal.

```js
roundTo(1234.56, -2);
//=> 1200
```

## API

### roundTo(value, precision)

Round the decimals with [`Math.round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).

### roundTo.up(value, precision)

Round up the decimals with [`Math.ceil`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

### roundTo.down(value, precision)

Round down the decimals with [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

#### value

Type: `number`

#### precision

Type: `number` (integer)

Number of decimal places.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
