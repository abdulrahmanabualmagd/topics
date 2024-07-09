// Prototype-Based Inheritance

// Use Case     : When you want to create an object with a specific prototype.
// Advantages   : Provides fine-grained control over an object's prototype.

const proto = {
    name: "Ahmed",
    age: 25,
    showDetails: function (){
        console.log(`name: ${this.name} age: ${this.age}`)
    }
};
const createObj = Object.create(proto);

createObj.showDetails();
