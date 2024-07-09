// Using bind() method
function greet(greeting) {
  return greeting + ", " + this.name;
}

const person = { name: "Charlie" };

// Create a new function greetPerson with person object as the 'this' context and 'Hola' as the argument
const greetPerson = greet.bind(person, "Hola");

// Call greetPerson() function
console.log(greetPerson()); // Output: Hola, Charlie
