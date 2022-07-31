

/*
operators act on values (the operands) to product a new value (the result)
*/

console.log("basic operators");
console.log("3 + 2 === ", 3 + 2);
console.log("3 - 2 === ", 3 - 2);
console.log("3 * 2 === ", 3 * 2);
console.log("3 / 2 === ", 3 / 2);
console.log("3 % 2 === ", 3 % 2);

let points = [
    { x: 0, y: 1 }, // points[0]
    { x: 2, y: 3 } // points[1]
]

console.log('\n', points, '\n')

// more complicated operands also work like this
console.log("points[0].y + points[1].x == ", points[0].y + points[1].x); // => 1 + 2 = 3

console.log("you can say something", 3 + 2);

console.log("string concatenation works with +", "morgan" + " bergen");

// javascript defines some shorthand arithmetic operators
let count = 0;
console.log("count === ", count);
count++;
console.log("count++ === ", count);
count--;
console.log("count-- === ", count);

// Add 2: same as count = count + 2
count += 2;
console.log("count += 2 === ", count);

// multiply by 3: same as count = count * 3
count *= 3;
console.log("count *= 3 === ", count);

/*
equality variables are compared with ===
*/

const x = 2;
const y = 3;
console.log("x === ", x);
console.log("y === ", y);
console.log("x === y is ", x === y);
console.log("x !== y is ", x !== y);
console.log("x < y is", x < y);
console.log("x > y is", x > y);
console.log("x <= y is", x <= y);
console.log("x >= y is", x >= y);
console.log("x == y is", x == y);

// false:  the two strings are not the same
console.log("two === three is", "two" === "three");

// true:  "tw" is alphabetically greater tahn "th"
console.log("tw > th is", "tw" > "th");

console.log("\n");

// logical operators combine or invert boolean values

// true and true === true
console.log("(x === 1) && (y === 2)", (x === 1) && (y === 2));

// false or false === false
console.log("(x > 100) || (y > 200)", (x > 100) || (y > 200));

// not false === true
console.log("!(false) is ", !(false));

/*
an expression is something that computes a value, but doesnt change the state of the program
a statement does not have a value, however they alter the state of the program
variable declarations are statements
assignments statements are statements
control structures are statements
examples of control structures: for, if, while, switch, etc loops
*/

