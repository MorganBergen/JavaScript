/*

a function is a named and parameterized block of code that can be used to perform a task.
functions can be invoked, or called, by passing arguments to them.

function definition

function name(parameter1, parameter2) {
    // function body
    return value
}

arrow function definition

const name = (parameter1, parameter2) => return value;

*/


// function definition
// defined a function named plus1 with parameter x
function plus1(x) {
    return (x + 1);
}

// function invocation
console.log(plus1(9));

// functions are values that can be assigned to variables
let squared = function (x) {
    return (x * x);
}

console.log(squared(plus1(9)));

let test1 = function (x) {
    return (x);
}

let test2 = function (x) {
    return (x);
}

console.log(test1 === test2 ? "same" : "different");

console.log(test1(9) === test2(9) ? "same" : "different");



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
