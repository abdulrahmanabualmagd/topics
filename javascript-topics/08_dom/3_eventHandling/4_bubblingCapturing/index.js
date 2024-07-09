// // Event Bubbling
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked");
});

/*
 * in the previous code the button is clicked but all the events will be fired included by that element
 * the direction is from inner to outer
 */

//Event Capturing
document.getElementById("parent1").addEventListener(
  "click",
  function () {
    console.log("Parent clicked (capturing)");
  },
  true
);

document.getElementById("child1").addEventListener("click", function () {
  console.log("Child clicked");
});

/*
 * the direction if from the
 */
