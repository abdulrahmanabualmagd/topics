function outerFunction() {
    var outerVariable = "I'm from the outer function!";
    
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closureExample = outerFunction();
  closureExample(); // Output: I'm from the outer function!