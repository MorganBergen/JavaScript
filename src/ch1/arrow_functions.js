
/*
there is a shorthand syntax for defining functions
this concise syntax uses => to separate the argument list from the function body
so functions defined this way are known as arrow functions

arrow functions are anonymous functions, meaning they do not have a name
arrow functions are most commonly used when you want to pass an unnamed function
as an argument to another function
*/

// arrow function
let five = 5;
const add1 = (x) => x + 1;
const square = (x) => x * x;

console.log(square(add1(five)));

let a = [];
console.log(a.push(1, 2, 3)); // => 3
a.reverse(); //reverse the order of the elements in the array
console.log(a); // => [3, 2, 1]
console.log(a.reverse()); // => [1, 2, 3]