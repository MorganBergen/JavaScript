/*
javascript supports object-oriented programming, however it is not a strict object-oriented language
more detail can be found in chapter 9
here is a simple example that demonstrates how to define a javascript class to represent a point
*/

//objects that are instances of this class have a single method


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    class_name() {
        return ("Point");
    }
    distance() {
        return (Math.sqrt(this.x * this.x + this.y * this.y));
    }
}

// create a new object of type Point
let p = new Point(1, 1);
console.log("class name is ", p.class_name());
console.log("distance of (", p.x, ", ", p.y, ") === ", p.distance());

/*
we have only shown the basics of syntax and capabilities of javascript

there are many other features that are not shown here
such as 

modules - how to organize code into separate files
        - shows how javascript code in one file or scipt can use javascirpt functions and classes define in other files or scripts
JavaScript Standard Library - a collection of useful functions and objects that you dont need to define yourself
                            - these functions and objects are available to you in the global scope
                            - covers the built-in functions and classes that are available to all javascript programs.  
                            - This includes important data structures like maps and sets.
iterators - how for/of loops work on a fundamental level and how to make your own classes iteratble with for or of loops.
generators - yield statement
asynchronous javascript
- in-depth exploration of asynchronous programming
- covering callbacks and events
- promise-based APIs
- the async and await keywords
- javascript core is not asynchronous, however asynchronous APIs are the default in both web browers and Node
- chapter 13 will explain techniques for working with asynchronous APIs

MetaProgramming - how to use the JavaScript engine to create your own functions and classes
*/

/*
Chapter 15 - JavaScript in Web Browers
- Introduces the web browers host environment
- explains how web browers can execute JavaScript code
- covers the most important of the many APIs defined by web browers
- chapter 15 is the longest chapter in the book
*/

/*
Chapter 16 - Server-Side JavaScript with Node
- introduces the Node host enviroment, covering the fundamental programming model
- the data structrues and algorithms that are used in Node
- and the APIs that are most important to understand.
*/

/*
chapter 17 - JavaScript Tools and Extensions
- covers tools and language extensions that are worth knowning about because they are widely
used in the javascript community and may make you more efficient in your work.

*/