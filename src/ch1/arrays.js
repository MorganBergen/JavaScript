

// arrays are the second most common data type in JavaScript
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(primes[0]);
console.log(primes.length);

// access the last element in an array
console.log(primes[primes.length - 1]);

// access the first element in an array
console.log(primes[primes.length - primes.length])

// arrays are mutable
primes[primes.length] = 101;
console.log(primes);

// you can add element at any index position in an array even when that index doesnt fit the array length in real time
primes[50] = 1263871263786;
console.log(primes);

// you can alter an array element at any index position
primes[0] = 1;
console.log(primes[0]);

// [] is an empty array with no elements
console.log(primes.length);
primes = [];
console.log(primes.length);

// arrays and objects can hold other arrays and objects
let points = [
    { x: 0, y: 1 },
    { x: 2, y: 3 }
];

// should print out 1
console.log(points[0].y)

// should print out 2
console.log(points[points.length - 1].x)

let data = {
    trial1: [[1, 2], [3, 4], [5, 6]],
    trial2: [[7, 8], [9, 10], [11, 12]]
}

// should print out 5
console.log(data.trial1[data.trial1.length - 1][0]);

