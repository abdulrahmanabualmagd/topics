// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Rest parameter
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
