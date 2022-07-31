/*
types, values, and variables

1. types

- primatives data types
- numbers
- strings
- boolean truth values
- undefined
- null


- object data types


*/

Math.pow(2, 53)
Math.round(.6)
Math.ceil(.6)
Math.floor(.6)
Math.abs(-5)
Math.max(x, y, z)
Math.min(x, y, z)
Math.random()
Math.PI
// => 9007199254740992: 2 to the power 53
// => 1.0: round to the nearest integer
// => 1.0: round up to an integer
// => 0.0: round down to an integer
// => 5: absolute value
// Return the largest argument
// Return the smallest argument
// Pseudo-random number x where 0 <= x < 1.0
// π: circumference of a circle / diameter
// e: The base of the natural logarithm
// => 3**0.5: the square root of 3
// => 3**(1/3): the cube root of 3
// Trigonometry: also Math.cos, Math.atan, etc.
// Natural logarithm of 10
Math.E
Math.sqrt(3)
Math.pow(3, 1 / 3)
Math.sin(0)
Math.log(10)
Math.log(100) / Math.LN10
// Base 10 logarithm of 100

Math.cbrt(27)
// => 3: cube root
Math.hypot(3, 4)
// => 5: square root of sum of squares of all arguments Math.log10(100) // => 2: Base-10 logarithm
Math.log2(1024)
// => 10: Base-2 logarithm
// Natural log of (1+x); accurate for very small x
// Math.exp(x)-1; the inverse of Math.log1p()
// -1, 0, or 1 for arguments <, ==, or > 0
// => 6: optimized multiplication of 32-bit integers
Math.log1p(x)
Math.expm1(x)
Math.sign(x)
Math.imul(2, 3)
Math.clz32(0xf)
// => 28: number of leading zero bits in a 32-bit integer Math.trunc(3.9) 
// => 3: convert to an integer by truncating fractional part
Math.fround(x)
Math.sinh(x)
Math.asinh(x)
// Round to nearest 32-bit float number
// Hyperbolic sine. Also Math.cosh(), Math.tanh()
// Hyperbolic arcsine. Also Math.acosh(), Math.atanh()