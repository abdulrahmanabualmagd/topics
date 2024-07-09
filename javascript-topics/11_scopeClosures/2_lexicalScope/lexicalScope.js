/*
 * - Lexical Scope: 

 * - JavaScript uses lexical scoping, which means the scope of a variable is determined by its position within the source code.

 * - When a variable is referenced, JavaScript first looks for it in the current scope. If not found, it goes up the scope 
 *      chain until it finds the variable or reaches the global scope. (Start looking from the Inner => to the Outer Until finding it)
 */

function outerFunction() {
  let outerVariable = "I am outer";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from outerFunction's scope
  }

  innerFunction();
}

outerFunction(); // Output: 'I am outer'
