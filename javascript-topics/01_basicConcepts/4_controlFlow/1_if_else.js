var x = 10;

// Here if one condition acheived, it will break the flow
if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}

// Here if one condition acheived it will conintue checking the other conditions
if (x > 10) {
  console.log("x is greater than 10");
} 
if (x < 10) {
  console.log("x is less than 10");
} 
if (x = 10){ 
  console.log("x is equal to 10");
}