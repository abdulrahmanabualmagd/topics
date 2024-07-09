// ------------------------------- [ Regular Expression Methods

const pattern = /hello/;
const str = 'hello world';

// test()
console.log(pattern.test(str)); // Output: true

// exec()
console.log(pattern.exec(str)); // Output: ["hello", index: 0, input: "hello world", groups: undefined]

// match()
console.log(str.match(pattern)); // Output: ["hello"]

// replace()
const newStr = str.replace(pattern, 'hi');
console.log(newStr); // Output: "hi world"

// search()
console.log(str.search(pattern)); // Output: 0

// split()
const splitArray = str.split(/\s+/); // Matches one or more whitespace characters
console.log(splitArray); // Output: ["hello", "world"]
