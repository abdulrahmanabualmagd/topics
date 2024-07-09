// Define an object with properties and methods
const person = {
  name: "John",
  age: 30,
  email: "john@example.com",
  getFormattedName() {
    return this.name.toUpperCase();
  },
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// Accessing properties and methods
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation
console.log(person.getFormattedName()); // Method call
console.log(person.greet()); // Method call
