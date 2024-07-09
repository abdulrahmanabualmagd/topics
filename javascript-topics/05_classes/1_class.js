// Encapsulation
export class Car {

  // Ctor
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Properties
  get carmake() {
    return `made by ${this.make}`;
  }
  set carmake(make) {
    this.make = make;
  }

  // Methods
  start() {
    console.log(`${this.make} ${this.model} is started`);
  }
}

// Instansiation
const car = new Car("bmw", "2000");


car.start();
console.log(car.carmake)