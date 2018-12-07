# number-accuracy [![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=1.0.0&x2=0)](https://www.npmjs.com/package/number-accuracy) [![Build Status](https://travis-ci.org/nefe/number-precision.svg?branch=master)](https://travis-ci.org/nefe/number-precision.svg?branch=master)

Perform addition, subtraction, multiplication and division operations precisely using javascript

### Why

```js
1.0 - 0.9 = 0.09999999999999998
0.00081 * 100 = 0.08099999999999999
0.0007 * 100 = 0.06999999999999999
```

### Install

```
npm install number-accuracy --save
```

### Methods

```js
NA.strip(num)         // strip a number to nearest right number
NA.plus(num1, num2, num3, ...)   // addition, num + num2 + num3, two numbers is required at least.
NA.minus(num1, num2, num3, ...)  // subtraction, num1 - num2 - num3
NA.times(num1, num2, num3, ...)  // multiplication, num1 * num2 * num3
NA.divide(num1, num2, num3, ...) // division, num1 / num2 / num3
NA.round(num, ratio)  // round a number based on ratio
```

### Usage

```js
import NA from 'number-accuracy'
NA.strip(0.09999999999999998); // =0.1
NA.plus(0.1, 0.2);             // =0.3 not 0.30000000000000004
NA.plus(2.3, 2.4);             // =4.7 not 4.699999999999999
NA.minus(1.0, 0.9);            // =0.1 not 0.09999999999999998
NA.times(3, 0.3);              // =0.9 not 0.8999999999999999
NA.times(0.362, 100);          // = 36.2, not 36.199999999999996
NA.divide(1.21, 1.1);          // =1.1 not 1.0999999999999999
NA.round(0.105, 2);            // =0.11 not 0.1
```

### License
GCY
