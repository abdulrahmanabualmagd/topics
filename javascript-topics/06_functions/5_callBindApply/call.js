// Using call() method
function greet() {
  return "Hello, " + this.name;
}

const person = { name: "Alice" };

// Call greet() function with person object as the 'this' context
console.log(greet.call(person)); // Output: Hello, Alice
