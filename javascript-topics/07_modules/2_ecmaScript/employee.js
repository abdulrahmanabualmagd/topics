// Note: to use ecmaScript module you have to set the type in the package.json ["type" : "module"]

import { Person, p as person } from "./person.js"; // Used in browser (ES module) | Occurs in comopile time | Not allowed to be nested
// the location of the import doesn't matter it will be executed at compile time before runtime

class Employee extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greet() {
    console.log(`${this.name}, agd: ${this.age}`);
  }
}

console.log(person);

const emp = new Employee("Abdulrahman");
emp.greet();
