/*
objects are the third most common data type in JavaScript
objects with functions are called methods
*/

let a = [];
a.push(1, 2, 3);
a.reverse();

a.distance = function () {
    let p1 = this[0];
    let p2 = this[1];
    return (Math.sqrt(p1 + p2));
}

console.log(a.distance());
about_a();

function about_a() {
    console.log("the data type of a is ", typeof a);
    console.log("the length of a is ", a.length);
    console.log("the value of a is ", a);
    console.log("the value of a[0] is ", a[0]);
}

