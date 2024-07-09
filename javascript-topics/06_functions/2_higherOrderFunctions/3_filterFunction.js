/*
 * Takes an array and a predicate function, filters out elements of the array based
 * on whether they satisfy the predicate, and returns a new array containing
 * only the elements that pass the test.
 */

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => {
  return n > 5;
});
