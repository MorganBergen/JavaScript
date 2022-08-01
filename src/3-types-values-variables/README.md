# types, variables, and values

## overview

- explaination of the fundamental details about how data is represented and manipulated in JavaScript
- supported data types is the most fundamental characteric of any programming language.
- the way variables work is the second most fundamental characteric as well.

### Data Types

1.  Primitive Data Types

    > Primitive types are immutable values and everything but null & undefines have methods attached to them that can be invoked!

    - numbers
    - strings
    - boolean truth values
    - undefined
    - null
    - symbols

2.  Object Data Types

    > An object is a mutable data type and is a member of the type object is a collection of properties where each property has a name and a value, either a primative value, or another object. There are global object types or ordinary object types.

    - Arrays
    - Sets
    - Map
    - RegExp
    - Date
    - Error
    - Function
    - Class

- Magic Methods

        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        a.sort();
         // to sort the elements of an array a for example we don't pass a to a sort function,
         // instead we invoke the sort method of a...

3.  Memory Management

    > javascript interpreter performs automatic garbage collection for memory management

    - destruction & deallocation of objects or other values is done automatically
    - garbage collection will be performed when a porgram no longer has any way to refer to a variabl and will then reclaim the RAM memory it was previously occupying.

4.  Object Orientation in JavaScript

    > The best part of OOP is the fact that globally defined functions become a thing of the past...

- equality operator

        == // performes implicit type conversion

- strict equality

        === // does not perform type conversions

### Constants and Variables

> Are programmer dsefined names used to refer to certain values. Constants and varibale declarations are untyped meaning declarations do not specify what kind of value will be assigned in the future.

1.  constants declaration

        const name = "data";

2.  variables declaration

        let name; // new style
        var name; // old style

## Numbers

> Numbers are primary numeric type in javascript and represented by floating point numbers. All numbers can represent all integers between (-2^53) and (2^53 \* 1)

1.  integer literals

        0
        3
        100000

2.  hexadecimal literals

        0x0 // = 0
        0xff // = 255
        0xBADCAFE // = 195939070

3.  binary literals

        0b0 // = 0
        0b1010 // = 10
        0b10101 // = 21 (1* 16 + 0* 8 + 1* 4 + 0* 2 + 1\* 1)

4.  octal literals

        0o377 // = 255 (3* 64 + 7* 8 + 7* 4 + 7* 2 + 7\* 1)

5.  floating points

        0.1 // = 0.1
        0.1e2 // = 1.0
        0.1e-2 // = 0.001

6.  exponential notation

          1.0e+2 // =  100.0
          [digits][.digits][(E|e)[(+|-)]digits]

7.  separators

        let billion = 1_000_000_000;
        let bytes = 0x89_AB_CD_EF;   // =  0x89ABCDEF
        let factions = 0.123_456_789;   // =  0.123456789
        // separators in numeric literals _ you can use underscores within numbers to separate digits _ separators are implemented by all major browsers and by Node.js

### Arithmetic in Javascript

1.  basic arithmetic

         +     // addition
         _      // subtraction
         *      // multiplication
         **     // exponentiation
         /      // division
         //     // integer division
         %      // modulus
         ++     // increment
         --     // decrement

2.  complex arithmetic

        let power = Math.pow(2, 53); // => 9007199254740992: 2 to the power of 53   (2 ** 53)
        let round = Math.round(.6); // => 1: round to the nearest integer
        let ceiling = Math.ceil(.6); // => 2: round up to the nearest integer
        let floor = Math.floor(.6); // => 0: round down to the nearest integer
        let absolute = Math.abs(-5); // => 5: absolute value of -5
        let largest = Math.max(1, 2, 3, 4, 5); // => 5: largest value of 1, 2, 3, 4, 5
        let smallest = Math.min(1, 2, 3, 4, 5); // => 1: smallest value of 1, 2, 3, 4, 5
        let pseudo_random = Math.random(); // => 0.5: random number between 0 and 1
        let sqrt = Math.sqrt(25); // => 5: square root of 25
        let cube = Math.cbrt(8);  // => 2: cube root of 8
        let sin = Math.sin(90);   // => 1: sine of 90
        let cos = Math.cos(90);  // => -1: cosine of 90
        let tan = Math.tan(90); // => Infinity: tangent of 90
        let logarithm = Math.log(1024); // => 10: logarithm of 1024
        let log2 = Math.log2(1024); // => 10: logarithm of 1024 to the base 2
        let π = Math.PI; // => 3.141592653589793: pi
        let e = Math.E; // => 2.718281828459045: e
        let φ = Math.PHI; // => 1.618033988749895: phi
        let ψ = Math.PSI; // => 1.618033988749895: psi
        let ω = Math.OMEGA // => 1.618033988749895: omega

- Some complex aritnmetic does not raise errors in cases of overflow, underflow, or division by zero.

- Overflow/Underflow: When the result of an operation is larger/smaller than the largest/smallest representable number (overflow), the result is a special infinity value.

        INFINITY
        -INFINITY

- Negative Underflow: If underflow occurs from a negative number, JavaScript returns a special value known as “negative zero.”

        -0

- Division by Zero: When the result of an operation is divided by zero.

        ∞
        -∞

- Not a Number: When the result of an operation is not a number.
  NaN

### Dates and Times

- Javascript has a Date object that represents a point in time.
- They have a numeric value that represents the number of milliseconds since January 1, 1970.
- The Date object has methods that allow you to manipulate the date

        let timestamp = Date.now();
        let now = new Date();
        let ms = now.getTime();
        let iso = now.toISOString();

        function show() {
            console.log(timestamp); // => 1545010989801
            console.log(now);       // => Mon Jan 01 1970 00:00:00 GMT+0000 (GMT)
            console.log(ms);        // => 1545010989801
            console.log(iso);       // => 1970-01-01T00:00:00.000Z
        }

        show()

## Strings

> A string is an immutable ordered sequence of 16 - bit values, each of whcih typically represents a unicode character.

- the length of a string is a number of 16 - bit values it contains
- strings and arrays do zero base indexing
- strings are iterable

1.  UTF-16

         let euro = "€";
         let heart = "♥";
         console.log(euro.length); // => 1
         console.log(heart.length); // => 1

2.  String Literals

        let empty = ""; // => "" (empty string)
        let single = 'single'; // => 'single'
        let double = "double"; // => "double"
        let unicode = "I'm 💩"; // => "I'm 💩 " || "I am shit"
        let inside = 'name="value"'; // => name="value"

3.  Interpolated Strings

        // multi line strings
        let multi = 'two\nlines';

        // three lines
        let three = "one\
                     long\
                     line";

        let two = `the newline character at the end of this line is included literally in this string`;

4.  Client-side javascript programming

- when combining HTML and JavaScript it is a good iea to use one style of quotes for JavaScript and the other for HTML.
- the style of quotes used for HTML is most commonly called double quotes and the style of quotes used for JavaScript is called single quotes.

      < button onclick = "alert('Thank you')" > Click Me </button >

5.  Escape Sequences in String Literals

        sequence        character representation
        \0              null character
        \b              backspace
        \t              tab
        \n              newline
        \v              vertical tab
        \f              form feed
        \r              carriage return
        \"              double quote
        \'              single quote or apostrophe
        \\              backslash
        \xnn            hexadecimal number nn represents the character with that number
        \u{n}           unicode character with code point n

- If the \ character preceds any character other than the above, the backshalh is simply ignored. For example:

        \# \\ is the same as #

6. Working with strings

- string concatenation

        let name = "Morgan";
        let message = "Hello, " + "world"; // => "Hello, world!"
        let greeting = "Welcome to my site " + " " + name; // => "Welcome to my site, visitor!"

- string comparison

> coparison is done simply by comparing the 16 - bit values.

        let company = "Google";
        let same_company = "Google";
        let different_company = "Microsoft";

        console.log(company === anotherCompany); // => true
        console.log(company !== different_company) // => true
        console.log(company > different_company) // => false
        console.log(company < different_company) // => false
        console.log(company >= different_company) // => false
        console.log(company <= different_company) // => false
        console.log(company == same_company) // => true
        console.log(company != different_company) // => true

- string length

        let me = "Morgan";
        console.log(me.length); // => 5

- substring, slice, split

        me.substring(1, 4); // => "org"
        me.slice(1, 4); // => "org" same as substring
        me.slice(-3); // => "erg" last three characters
        me.slice(-3, -1); // => "er" last three characters, but not the last character
        me.slice(1); // => "orgen" from the second character
        me.split(", "); // => ["Morgan", "Bergen"]

- string search

        me.indexOf("Morgan"); // => 0 position of the first occurrence of the substring
        me.indexOf("M", 3); // => 3rd position of the first occurrence of the substring
        me.indexOf("zz"); // => -1: zz does not include in the string
        me.lastIndexOf("B"); // => 6: last position of the first occurrence of the substring

- boolean searching fucntions

        me.includes("Morgan"); // => true
        me.startsWith("B"); // => false
        me.endsWith("en"); // => true
        me.includes("org"); // => true
        me.includes("zz"); // => false

- creating modified versions of strings

        me.replace("Morgan", "David") // => "David Bergen"
        me.toLowerCase(); // => "morgan bergen"
        me.toUpperCase(); // => "MORGAN BERGEN"
        me.normalize(); // => "Morgan Bergen"
        me.normalize("NFD"); // => "Morgan Bergen"

- inspecting individual characters of strings

        me.charAt(0); // => "M"
        me.charAt(me.length - 1); // => "n"
        me.charCodeAt(0); // => 77: ASCII code for M
        me.charCodeAt(me.length - 1); // => 110: ASCII code for n
