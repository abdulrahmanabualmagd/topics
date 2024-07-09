// Note: to use ecmaScript module you have to set the type in the package.json ["type" : "commonjs"] or delete it

const {Person, p} = require('./person')   // Used in Node (commonjs)  | require is a function called in runtime | allowed to be nested
// The location of the require is important because it runs in the runtime

class Employee extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greet() {
    console.log(`${this.name}, agd: ${this.age}`);
  }
}

console.log(p);

const emp = new Employee('Abdulrahman');
emp.greet();