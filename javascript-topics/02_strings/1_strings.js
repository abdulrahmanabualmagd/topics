// Declaration
let singleQuoted = 'Hello, world!';
let doubleQuoted = "Hello, world!";
let templateLiteral = `Hello, world!`;

// Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// String Length
let str = "Hello, world!";
console.log(str.length); // Result: 13

// Accessing Characters
console.log(str[0]); // Result: "H"
console.log(str.charAt(1)); // Result: "e"

// String Methods
console.log(str.toUpperCase()); // Result: "HELLO, WORLD!"
console.log(str.indexOf("world")); // Result: 7

// String Comparison
console.log("apple" < "banana"); // Result: true

// String Templates
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Result: "Hello, John!"
