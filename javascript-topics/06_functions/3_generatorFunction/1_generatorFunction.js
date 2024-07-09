// Define a generator function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

// Use the generator function to create the iterator
let iterator = generator();

// Generator workflow
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Reset Generator by reassign the iterator
iterator = generator();

// get all (values) from the generator
for (let item of iterator) {
  console.log(item);
}
