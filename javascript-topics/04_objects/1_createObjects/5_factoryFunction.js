// Factory Function

// Use Case     : When you want to encapsulate object creation logic in a function.
// Advantages   : Can return different types of objects and hide the creation logic.

function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const factoryObj = createPerson('John', 30);

