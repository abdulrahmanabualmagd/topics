import { Car } from "./class.js";

// Inheritance (inherit from Car)
class ElectricCar extends Car {
  
  // Ctor
  constructor(make, model, capacity) {
    
    // Initialize base
    super(make, model);

    this.capacity = capacity;
  }

  // Method
  cap() {
    console.log(`${this.make} ${this.model} ${this.capacity}`);
  }
}

let car = new Car("bmw", 2010);

let ecar = new ElectricCar("bmw", 2021, 4000);
ecar.cap();
ecar.start();
