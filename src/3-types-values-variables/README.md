# types, variables, and values

## overview

- explaination of the fundamental details about how data is represented and manipulated in JavaScript
- supported data types is the most fundamental characteric of any programming language.
- the way variables work is the second most fundamental characteric as well.

### data Types

1. primitive data types

   > primitive types are immutable values and everything but null & undefines have methods attached to them that can be invoked!

   - numbers
   - strings
   - boolean truth values
   - undefined
   - null
   - symbols

2. object data types

   > An object is a mutable data type and is a member of the type object is a collection of properties where each property has a name and a value, either a primative value, or another object. There are global object types or ordinary object types.

   - Arrays
   - Sets
   - Map
   - RegExp
   - Date
   - Error
   - Function
   - Class

3. Memory Management

   > javascript interpreter performs automatic garbage collection for memory management

   - therefore the destruction & deallocation of objects or other values is done automatically
   - the interpreter will garbage collect when a porgram no longer has any way to refer to a variable.
   - and the interpreter will then reclaim the RAM memory it was occupying.

4. Object Orientation in JavaScript

   > The best part of OOP is the fact that globally defined functions become a thing of the past.

- Therefore you utilizes types that have defined methods for working with certain values.
- For example to sort the elements of an array a for example we don't pass a to a sort function, instead we invoke the sort method of a...

        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        a.sort();

- strings can be thought of as static arrays of characters, theyre indexable, but not mutable
- value conversions are mostly implicit, meaning implicit static caste conversions are done under the hood

- the equality operator performs type conversions

        ==

- strict equality operator does not do type conversions

        ===

3. Constants and Variables

> Are programmer dsefined names used to refer to certain values. Constants and varibale declarations are untyped meaning declarations do not specify what kind of value will be assigned in the future.

- constants declaration

        const name = "data";

- variables are declared

        let name; // new style
        var name; // old style

### Numbers

> Numbers are primary numeric type in javascript and represented by floating point numbers. All numbers can represent all integers between (-2^53) and (2^53 \* 1)

- integer literals

        0
        3
        100000

- hexadecimal literals

        0x0 // = 0
        0xff // = 255
        0xBADCAFE // = 195939070

- binary literals

        0b0 // = 0
        0b1010 // = 10
        0b10101 // = 21 (1* 16 + 0* 8 + 1* 4 + 0* 2 + 1\* 1)

- octal literals

        0o377 // = 255 (3* 64 + 7* 8 + 7* 4 + 7* 2 + 7\* 1)

- floating points

        0.1 // = 0.1
        0.1e2 // = 1.0
        0.1e-2 // = 0.001

- exponential notation is as follows:

          1.0e+2 // =  100.0

  [digits][.digits][(E|e)[(+|-)]digits]

- separators

  > separators in numeric literals _ you can use underscores within numbers to separate digits _ separators are implemented by all major browsers and by Node.js

        let billion = 1_000_000_000;
        let bytes = 0x89_AB_CD_EF;   // =  0x89ABCDEF
        let factions = 0.123_456_789;   // =  0.123456789

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

        Math.pow(2, 53) // =  9007199254740992: 2 to the power of 53
        Math.round(.6)    // =  1: round to the nearest integer
