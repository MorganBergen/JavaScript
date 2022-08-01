/*


#### Arithmetic in Javascript

- basic arithmetic
< + > // addition
< - > // subtraction
< * > // multiplication
< ** > // exponentiation
< / > // division
< // > // integer division
< % > // modulus
< ++ > // increment
< -- > // decrement

- complex arithmetic
Math.pow(2, 53) > // => 9007199254740992: 2 to the power of 53
Math.round(.6)    // => 1: round to the nearest integer



*/

let power = Math.pow(2, 53);
let round = Math.round(.6);
let ceiling = Math.ceil(.6);
let floor = Math.floor(.6);
let absolute = Math.abs(-5);

function show() {
    console.log(power);
    console.log(round);
}

show();


// to sort an array of numbers
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.sort();

// constants
const PI = 3.14159;


// variable declaration
let x;

// old style variable declaration
var y;