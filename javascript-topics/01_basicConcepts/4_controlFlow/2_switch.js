var fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple": // Here if the value was apple or orange
  case "orange":
    console.log("Orange is orange. & Apple is red.");
    break;
  default:
    console.log("I don't know the color of this fruit.");
}

var number = 42;

switch (true) {
  case number >= 0 && number <= 10:
    console.log("Number is between 0 and 10");
    break;
  case number > 10 && number <= 20:
    console.log("Number is between 11 and 20");
    break;
  case number > 20 && number <= 30:
    console.log("Number is between 21 and 30");
    break;
  default:
    console.log("Number is either less than 0 or greater than 30");
}
