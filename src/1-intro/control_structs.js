/*
control structures are statements that alter the state of the program
*/

// if statements are control structures

let a = [1, 2, 3, 4, 5];

function absolute(x) {
    if (x >= 0) {
        return (x);
    } else {
        return (-x);
    }
}
console.log("absolute(-10) === absolute(10) is ", absolute(-10) === absolute(10));


// for loops are control structures
function reveal(array) {
    let size = array.length;
    for (let i = 0; i < size; i++) {
        console.log(array[i]);
    }
}

function reverse(array) {
    let size = array.length;
    for (let i = size - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum = sum + x;
    }
    return (sum);
}

console.log(sum([1, 2, 3, 4, 5]));


// while loops
function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return (product);
}

console.log("4! === ", factorial(4));
