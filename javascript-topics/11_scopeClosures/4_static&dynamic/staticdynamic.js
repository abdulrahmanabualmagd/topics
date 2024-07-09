// Static (lexical) scoping example
let staticVar = 10;

function staticScopeFunction() {
  console.log("Static scope:", staticVar); // Accessing staticVar from the lexical scope
}

function staticScopeCaller() {
  let staticVar = 20; // This variable is local to staticScopeCaller function
  staticScopeFunction(); // Output: Static scope: 10, because staticVar is accessed from the lexical scope
}

staticScopeCaller();

// Dynamic scoping example (pseudo code)
let dynamicVar = 10;

function dynamicScopeFunction() {
  console.log("Dynamic scope:", dynamicVar); // Accessing dynamicVar from the dynamic scope
}

function dynamicScopeCaller() {
  dynamicVar = 20; // Change dynamicVar's value
  dynamicScopeFunction(); // Output: Dynamic scope: 20, because dynamicVar is accessed from the dynamic scope
}

dynamicScopeCaller();
