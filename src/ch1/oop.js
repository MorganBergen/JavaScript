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
we have only 

*/