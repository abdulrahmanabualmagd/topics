// for...in loop: Iterating over the (properties) of an object


const person = { name: 'John', age: 30, address:'Minya, Egypt' };
for (let key in person) {
  console.log(key + ": " + person[key]);
}