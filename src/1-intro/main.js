// Language: javascript

let x = 2;
let y = 3;

console.log(x + y);
console.log((x === 2) && (y === 3));
console.log((x > 3 || (y < 3)));

x = 0;
console.log(x);

// primitive data types
integer_var = 1000;
double_var = 0.4;
string_var = "string in quotes";
delimit_str_var = 'delimit string'
boolean_var = true;
boolean_var0 = false;
nothing = null;
undefined_var = undefined;

console.log(integer_var);
console.log(double_var);
console.log(string_var);
console.log(delimit_str_var);
console.log(boolean_var);
console.log(boolean_var0);
console.log(nothing);
console.log(undefined_var);


console.log("foo".includes.apply("f"));

// standard built-in objects
/*
objects
arrays

note that arrays are not primative data types unlike in C++
*/

// an object is a collection of name/value pairs, or a string to value map


let morgan = {

    name: [{
        first: "Morgan",
        middle: "Maha",
        last: "Bergen",
    }],
    species: "homo sapien",
    birth_date: "March 24, 1998",

    education: [
        {
            institution: "University of Kansas",
            degree: "Bachelors of Science Computer Science",
            year: "junior",
            graduation_date: 2024
        }
    ],

    desired_roles: [
        "software engineer",
        "iOS application enegineer",
        "blockchain developer",
        "data scientist",
        "user interface designer"
    ],

    hometown: "Wichita, Kansas USA",
    nationality: "American",
    sex: 'female',
    race: "white & middle eastern",
    religion: "pantheism",
    language: ["english", "عربى"]
}


let morgan_more = {
    economic_philosophy: "Libertarianism",
    political_philosophy: "Progressism",
    belief_system: "Pragm atic Optimism",
    values: ["An Independent Mind", "Good Health", "Unadultured Curosity", "Meaningful Work", "Financial Freedom", "Emotional Intelligence", "Humor", "Love"],
    mother: "Mona Al-Abed Bergen",
    father: "David Bruce Bergen",
    brother: "David Khaled Bergen",
    interests: [
        "programming",
        "Behavioral Economics",
        "Blockchain Technologies",
        "Game Theory",
        "Data Structures",
        "Emerging wearables",
        "Residential Real-Estate Investing",
        "Philosophy"
    ]
}

let book = {
    topic: "javascript",
    edition: 7
};

/*
you can access the properties of an object with a 
. operator or [] operator
*/


if (book.topic === book["topic"]) {
    console.log("both . and [] operators output the same value");
    console.log(book.topic)
    console.log(book["topic"])
}

// create a new property by assigning a value to it
book.author = "Flanagan";

// or create a new empty object with no properties in it
book.contents = {};
console.log(book);

/*
conditionally access properties with the ?
*/

console.log(book.author ? "author exists" : "author does not exist");

book.contents = { ch01: "chapter 1 introduction to javascript", ch02: "chapter 2 lexical structure" };

// this will output "undefined" because the property does not exist
console.log(book.contents?.ch05);

console.log(book.contents.ch01 ? "ch01 exists" : "ch01 does not exist")

console.log(book.contents ? true : false);

console.log(book.contents ? "conditional true space" : "this is a conditional false space");

