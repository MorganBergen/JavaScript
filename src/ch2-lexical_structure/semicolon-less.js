// 7 optional semicolons

/*
javascript uses semicolons (;) ti seperate statements from one another
this is important for making the meaning of your code clear
without a separator the end of one statement might appear to be the beginning of the next or vice versa

javascript however allows you to omit semicolons at the end of a statement
this is called a "semicolon-less statement"
if you omit the semicolon between two statements you have to separate them with a new line
it is standard practice to use semicolons between statements, even if they arent required by the compiler

*/

// these are all valid statements:

a = 1;
b = 1;

let c = 1, d = 1;

let e = 1;
let f = 1;

g = 1, h = 1;
i = 1; j = 1;

let k = 1; let l = 1;

/*

javascript does not treat every line break as a semicolon:
it usually treats line breaks as semicolons onlyt if it cant parse the code without adding an implicit semicolon

formally:
javascript treats a line break as a semicolon if the next nonspace character cannot be intrepreted 
as a continuation of the current statement

*/

//valid semicolon-less statement:
let m
m
    =
    1
    ;
console.
    log
    (m)
    ;

/*
javascript will intrepret the code like this 
let m; m = 1; console.log(m);
*/

let n;
n = 1;

// javascript cannot parse the variable declaration with keyword let without a ;