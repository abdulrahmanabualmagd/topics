let array = ["apple", "banana", "cherry"];

console.log("Original array:", array);

console.log("push:", array.push("date"), "-", array);
console.log("pop:", array.pop(), "-", array);
console.log("shift:", array.shift(), "-", array);
console.log("unshift:", array.unshift("apricot", "avocado"), "-", array);

console.log("concat:", array.concat(["grape", "kiwi"]), "-", array);
console.log("join:", array.join(", "), "-", array);
console.log("slice:", array.slice(1, 3), "-", array);
console.log("splice:", array.splice(1, 2, "blueberry", "cantaloupe"), "-", array);

console.log("indexOf:", array.indexOf("blueberry"), "-", array);
console.log("lastIndexOf:", array.lastIndexOf("cherry"), "-", array);

array.forEach(item => console.log("forEach:", item));
console.log("map:", array.map(item => item.toUpperCase()));
console.log("filter:", array.filter(item => item.length > 6));
console.log("reduce:", array.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0));
console.log("reduceRight:", array.reduceRight((accumulator, currentValue) => accumulator + currentValue.length, 0));

console.log("find:", array.find(item => item.startsWith("b")));
console.log("findIndex:", array.findIndex(item => item.startsWith("c")));

console.log("every:", array.every(item => item.length > 5));
console.log("some:", array.some(item => item.length > 10));

console.log("sort:", array.sort());
console.log("reverse:", array.reverse());
console.log("includes:", array.includes("cantaloupe"));

console.log("Final array:", array);
