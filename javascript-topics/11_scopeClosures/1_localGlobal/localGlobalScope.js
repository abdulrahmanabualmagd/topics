/*
 * Scope:
 * Scope refers to the visibility and accessibility of variables within your code.
 * JavaScript has two main types of scope: global scope and local scope.
 * Global scope: Variables declared outside of any function are considered to be in the global scope and are accessible throughout the entire script.
 * Local scope: Variables declared within a function are in the local scope and can only be accessed within that function.
 */

// Global Scope
let globalVariable = "I am global";

function myFunction() {
  // Local Scope
  let localVariable = "I am local";
  console.log(globalVariable); // Accessible
}

console.log(globalVariable); // Accessible
console.log(localVariable); // Not accessible - ReferenceError: localVariable is not defined
