/*
 * Takes an array, a combining function, and an initial value, applies
 * the combining function to each element of the array to reduce it
 * to a single value, and returns the accumulated result.
 */

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10
