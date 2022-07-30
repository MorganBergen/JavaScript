/*
statement termination rules lead to suprising results
this code looks like two separate statements separated with a newline
*/

let a = "a";
let b = "b";
let m = "m";
let f = "f";

/*
let y = x + f
    (a + b).tostring();

this code will not compile

{let y = x + f
            ^
TypeError: f is not a function
}

becasue javascript does not know what to do with the string "f" it intreprets it as
let y = x + f(a + b).tostring();

*/


// you must have an explicit semicolon to terminate a statement
let y = m + f;
(a + b).toString();
console.log(y);
console.log(typeof (y.toString()));


// some programmer do this which is a defensive ; and keeps the statements seperate
let x = 0
    ;[x, x + 1, x + 2].forEach(console.log);


// return, throw, yield, break, continue, and debugger statements
// often stand alone statements
// however they are usually followed by an identifier or expression, for example:

return true; // is valid

return
true; // is valid, however it is not the same

// the intrepreter assume you did this...
return; true;

// even though you probably meant this...
return true;

/*
tldr:

you must NOT insert a line break between return, break, or contune and the expression that follows those keywords
if you do your code is likely to compile, however your program will give you unexpected results and be difficult to debug
*/

// ==> must be written on the same line as the statement