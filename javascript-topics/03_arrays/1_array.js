// Declaration
let myArray = [];
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// Accessing Elements
console.log(myArray[0]); // outputs: undefined
console.log(numbers[2]); // outputs: 3
console.log(fruits[1]); // outputs: "banana"

// Array Length
console.log(numbers.length); // outputs: 5
console.log(fruits.length); // outputs: 3

// Modifying Arrays
fruits.push("grape");
console.log(fruits); // outputs: ["apple", "banana", "orange", "grape"]
fruits.pop();
console.log(fruits); // outputs: ["apple", "banana", "orange"]
fruits[1] = "kiwi";
console.log(fruits); // outputs: ["apple", "kiwi", "orange"]

// Iterating Over Arrays
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function(num) {
    console.log(num);
});

// Array Methods
let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits); // outputs: ["apple", "kiwi"]

let indexOfKiwi = fruits.indexOf("kiwi");
console.log(indexOfKiwi); // outputs: 1

// Multi-dimensional Arrays
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][2]); // accessing element at row 1, column 2 (outputs: 6)
