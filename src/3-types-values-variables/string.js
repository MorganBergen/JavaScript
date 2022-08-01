

/* 

Strings

    > A string is an immutable ordered sequence of 16 - bit values, each of whcih typically represents a unicode character.

- the length of a string is a number of 16 - bit values it contains
- strings and arrays do zero base indexing
- strings are iterable

*/

// UTF-16:
let euro = "€";
let heart = "♥";

console.log(euro.length); // => 1
console.log(heart.length); // => 1


/*

#### String Literals
- String literals are surrounded by double quotes ("") or single quotes ('')
- They can contain any character, including Unicode characters and can contain escape sequences.

*/

let empty = ""; // => "" (empty string)
let single = 'single'; // => 'single'
let double = "double"; // => "double"
let unicode = "I'm 💩"; // => "I'm 💩 " || "I am shit"
let inside = 'name="value"'; // => name="value"

/*
interpolated strings
- strings delimited with backticks (`) allow for expressions to be embeedded in the string


\n: newline
\r: carriage return
\t: tab
\b: backspace
\f: form feed
\v: vertical tab
\0: null


Multi line strings:

*/

// multi line strings
let multi = 'two\nlines'; // => "two\nlines"
console.log(multi); // => "two\nlines"