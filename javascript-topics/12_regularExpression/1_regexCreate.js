// ---------------------------- [ Diffierent Ways to create regex

// Using the RegExp Constructor
const pattern1 = new RegExp('hello');
console.log(pattern1.test('hello world')); // Output: true

const pattern2 = new RegExp('hello', 'i'); // 'i' flag for case-insensitive matching
console.log(pattern2.test('Hello world')); // Output: true

// Using Regular Expression Literal
const pattern3 = /hello/;
console.log(pattern3.test('hello world')); // Output: true

const pattern4 = /hello/i; // 'i' flag for case-insensitive matching
console.log(pattern4.test('Hello world')); // Output: true
