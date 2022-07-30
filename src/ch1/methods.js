





// we can define our own methods using the "this keyword refers to the object that is calling the method"

let points = [
    { x: 0, y: 1 }, // points[0]
    { x: 2, y: 3 }, // points[1]
    { x: 4, y: 5 } // points[2]
]

points.dist = function () {
    let p2 = this[1];
    let p3 = this[2];
    let a = p2.x - p3.x;
    let b = p2.y - p3.y;
    return Math.sqrt(a * a + b * b);
}

console.log(points.dist());
/*
complete the Now, as promised, here are some functions whose bodies demonstrate common Java‐ Script control structure statements:
1.3 a tour of javascript 
*/