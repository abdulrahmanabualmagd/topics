// Inheritance and prototype
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// instance member (would be inherited to the childs only)
Person.prototype.sayHello = function () {
  console.log("belongs to the instance");
};

// static member (belongs to the Person only)
Person.staticSayHello = function () {
  console.log("static belongs to the Prototype");
};

var person1 = new Person("Alice", 30);  // contains the instance member (sayHello())

// ----------- [ Static Method ]
Person.staticSayHello();    // allowed
//Person.sayHello();        // not allowed

// ----------- [ Instance Member ]
// Person.sayHello();       // not allowed
person1.sayHello();         // allowed
