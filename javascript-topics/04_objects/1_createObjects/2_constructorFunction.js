// Constructor Function

// Use Case     : When you need to create multiple objects with the same structure.
// Advantages   : Allows for the creation of multiple instances with shared properties and methods.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const constructorObj = new Person('John', 30);

