const obj = { a: 1, b: 2 };
Object.prototype.c = 3;


/*
    - looping over the own property of the object and does not include the inherited properties
    - return an array of the own properties
*/
console.log(Object.keys(obj)); // ['a', 'b']

/*
    - looping over both own and inherited properties
    - does not return anything, interact with each element withing its block
*/
for (let key in obj) {
  console.log(key); // 'a', 'b', 'c'
}