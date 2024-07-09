function getData() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Getting Data");
    }, 1000);
  });
}

// Prints the promise without waiting for resolve the promise
console.log(getData());

// Waits for the resolve and then go to .then chain
getData().then((data) => console.log(data)); // [ Won't pause the execution but will be executed when resolve is settled ]

(async function () {
  // Waits the Resolve of the promise and then print it
  // Thread Stay here until it got the resolve and then
  console.log(await getData()); // [ Pause the execution until reolve is settled ]

  // Will be printed after the await becuase await pause the execution but .then will not pause it so it will be printed before the .then
  console.log("sync");
})();

