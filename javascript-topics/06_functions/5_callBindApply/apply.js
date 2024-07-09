// Using apply() method
function greet(greeting) {
  return greeting + ", " + this.name;
}

const person = { name: "Bob" };
const args = ["Howdy"]; // Arguments in an array

// Call greet() function with person object as the 'this' context and arguments as an array
console.log(greet.apply(person, args)); // Output: Howdy, Bob
