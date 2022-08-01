# types, variables, and values

## overview

ss

- explaination of the fundamental details about how data is represented and manipulated in JavaScript
- supported data types is the most fundamental characteric of any programming language.
- the way variables work is the second most fundamental characteric as well.

### data Types

1. primitive data types

   > numbers
   > strings
   > boolean truth values
   > undefined
   > null
   > symbols

2. object data types

   > An object is a member of the type object is a collection of properties where each property has a name and a value, either a primative value, or another object.

   - global objects
   - ordinary objects
   - Array objects
   - Set objects
   - Map objects
   - Typed arrays
   - RegExp type
   - Date type
   - Error type
   - Function Type
   - Class type

   - set objects represent a set of values
   - map objects represents a mapping from keys to values
   - RegExp is a new type of object in javascipt and is a regular expression, that can be used to match strings. RegExp type represents textual patterns and enables matching, searching, and replacing operations on strings.
   - Date type represents dates and times and supports redimentary date arithmetic

- functions and classes are not just part of the language syntax: they are values that can be manipulated by Javacript Programs
- functions and classes are a specalized kind of object

1. Memory Management

- the javascript interpreter performs automatic garbage collection for memory management
- therefore the destruction & deallocation of objects or other values is done automatically
- the interpreter will garbage collect when a porgram no longer has any way to refer to a variable.
- the interpreter will then reclaim the RAM memory it was occupying

2. OOP

- globally define functions are not needed when using OOP, meaning there are types that have defined methods for working with certain values
- to sort the elements of an array a for example we dont pass a to a sort function. Instead we invoke the sort method of a

<array a = []>
<a.sort>

- numbers, strings, booleans, and symbols have methods attached to them that can be invoked
- object types are mutable
- primitive types are immutable
- strings can be thought of as static arrays of characters, theyre indexable, but not mutable
- value conversions are mostly implicit, meaning implicit static caste conversions are done under the hood

< == >

- the equality operator performs type conversions

< === >

- the strict equality operator does not do type conversions

3. Constants and variables

- are names to refer to values in your program
- constants are declared...
  <const variable = "data">
- variables are declared...
  <let variable>
  <var variable // older version of declaring variables in javascipt>
- javascript constants and variables are untyped: declarations do not specify what kind of value will be assigned in the future

### Numbers

- numbers are primary numeric type in javascript and represented by floating point numbers
- numbers can represent all integers between (-2^53) and (2^53 \* 1)

        < 5 > is a numeric literal

- integer literals are represented by the number type and are in base 10
  < 0 >
  < 3 >
  < 100000 >

- hexadecimal literals are represented by the number type and are in base 16
  < 0x0 > // => 0
  < 0xff > // => 255
  < 0xBADCAFE > // => 195939070

- binary literals are represented by the number type and are in base 2
  < 0b0 > // => 0
  < 0b1010 > // => 10
  < 0b10101 > // => 21 (1* 16 + 0* 8 + 1* 4 + 0* 2 + 1\* 1)

- octal literals are represented by the number type and are in base 8
  < 0o377 > // => 255 (3* 64 + 7* 8 + 7* 4 + 7* 2 + 7\* 1)

### floating point literals

- floating points represent decimal numbers and use the traditional syntax for real numbers
  < 0.1 > // => 0.1
  < 0.1e2 > // => 1.0
  < 0.1e-2 > // => 0.001

- exponential notation is as follows:

        < 1.0e+2 // => 100.0 >
        < [digits][.digits][(E|e)[(+|-)]digits] >

- separators in numeric literals _ you can use underscores within numbers to separate digits _ separators are implemented by all major browsers and by Node.js

        < let billion = 1_000_000_000; >
        < let bytes = 0x89_AB_CD_EF; > // => 0x89ABCDEF
        < let factions = 0.123_456_789; > // => 0.123456789

### Arithmetic in Javascript

- basic arithmetic

         +     // addition
         _      // subtraction
         *      // multiplication
         **     // exponentiation
         /      // division
         //     // integer division
         %      // modulus
         ++     // increment
         --     // decrement

- complex arithmetic

        < Math.pow(2, 53) // => 9007199254740992: 2 to the power of 53 >
        < Math.round(.6) > // =>
