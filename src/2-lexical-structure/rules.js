/*
chapter 2 lexical structure

- lexical structure is a set of elementary rules that specifies how you write programs in a language
- it is the lowest-level synrtax of a language
    - it specifies what varibale name look like
    - the delimiter characters for commensts
    - how one program statement is separated from the next

lexical sturcture includes:
- case sensitivity, spaces, lines breaks
- comments
- keyword literals
- identifiers, reservered words
- unicode
- optional semicolons

*/

// 1 the text of a javascript program

function example() {
    let x = true;
    while (x === true) {
        console.log("the while keyword must be types in all lowercase");
        x = false;
    }
}

example();

function online() {
    console.log("online, Online, OnLine, and ONLINE are all different variables");
}

/*
javascript ignores spaces that appear between tokens in progams, it also ignores lines breaks
you can use spaces and newlines freely in your code
you can format and indent your code however you want
JavaScript recognizes newlines, carriage returns, and a carriage return/line feed sequence as line terminators.
*/

console.log("word\u0020word"); // \u0020 is a unicode character for a space

// 2 comments
// single comment
/*
multi-line comment
*/

// 3 literals
// literals are values that are not variables
console.log(12)
console.log(12.3)
console.log("hello")
console.log(true)
console.log(null)
console.log(undefined)

// 4 identifiers and reserved words
/*
an identifier is a name.
- identifiers are used to name constants, variables, properties, functions, and classes
- identifiers are used to provide labels for certain loops in javascirpt code
*/

console.log("\n");
console.log("a javascript identifier must begin with a letter, an underscore, or a dollar sign");
console.log("digits cannot be used as the first character of a javascript identifier");


let legal = {
    i: "legal",
    _: "legal",
    $: "legal",
    _dummy: "legal",
    $str: "legal",
}



// 4 reserved words
let reserved_words = [
    "as",
    "const",
    "export",
    "get",
    "null",
    "target",
    "void",
    "async",
    "continue",
    "extends",
    "if",
    "of",
    "this",
    "while",
    "await",
    "debugger",
    "false",
    "import",
    "return",
    "throw",
    "with",
    "break",
    "default",
    "finally",
    "in",
    "set",
    "true",
    "yield",
    "case",
    "delete",
    "for",
    "instanceof",
    "static",
    "try",
    "catch",
    "do",
    "from",
    "let",
    "super",
    "typeof",
    "class",
    "else",
    "function",
    "new",
    "switch",
    "var",
    "enum",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public"
]

function reserved_words_all() {
    let size = reserved_words.length - 1;
    for (let i = 0; i <= size; i++) {
        // console.log(reserved_words[i]);
        console.log(process.stdout.write(reserved_words[i] + " "));
    }
}

reserved_words_all();


// 5 unicode
/*
unicode is a set of characters that can be used to represent any character in any language
it is common to use only ASCII letters and digits to represent characters in a language
however you can use unicode letters, digits, and ideographs, but not emojis in your code
*/

const π = "π";
const Ω = "Ω";
const ε = "ε";
const sí = true;

console.log(π);
console.log(Ω);
console.log(ε);
console.log(sí);


// 6 unicode escape sequences
let cafe = "café";

/*
javascript defines escape sequences that allow us to write unicode characters using only ASCII characters
unicode escape sequences begin with characters \u and are either followed by exactly four hexadecimal digits 
or by exactly three digits followed by a question mark
*/

/*
The Unicode escape for the character “é,” 
for example, is \u00E9; 
here are three different ways to write a 
variable name that includes this character:
*/


let café = 1;
console.log(café);
console.log(caf\u00e9);
console.log(caf\u{E9});

console.log("\u{1F600}"); // Prints a smiley face emoji
// console.log(😀); this will not work because the emoji is not in the unicode set

/*
JavaScript assumes that the source code it is
interpreting has already been nor‐ malized and does
not do any normalization on its own.
If you plan to use Unicode characters in your JavaScript programs,
you should ensure that your editor or some other tool performs
Unicode normalization of your source code to prevent you from
ending up with different but visually indistinguishable identifiers.
*/
