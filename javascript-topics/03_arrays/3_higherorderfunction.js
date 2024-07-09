let array = ["apple", "banana", "cherry"];

array.forEach((item) => console.log("forEach:", item));     // Apply function on each element in the array

console.log( 
  "map:",
  array.map((item) => item.toUpperCase())       // returns new array
);

console.log(
  "filter:",
  array.filter((item) => item.length > 6)       // returns new array 
);


console.log(
    "reduce:",
    array.reduce(                                 // returns single value (number)
      (accumulator, currentValue) => accumulator + currentValue.length,
      0       // accumulator initial value 
    )
  );

console.log(
  "reduce:",
  array.reduce(                                 // returns single value (number)
    (accumulator, currentValue) => accumulator + currentValue.length,
    ""       // accumulator initial value 
  )
);



console.log(
  "reduceRight:",
  array.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue.length,
    ""
  )
);
