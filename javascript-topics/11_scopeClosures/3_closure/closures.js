/*
 * - Closures:

 * - A closure is a combination of a function and the lexical environment within which that function was declared.
 * 
 * - Closures allow functions to access and manipulate variables that are not in their local scope, but are in the scope 
 *      in which the function was defined.
 * 
 * - They are created every time a function is created within another function, allowing the inner function to "remember" 
 *      its lexical scope even after the outer function has finished executing.
 */

function outerFunction() {
  let outerVariable = "I am outer";

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: 'I am outer'
