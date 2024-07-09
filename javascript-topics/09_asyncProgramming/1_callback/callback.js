/*
 * An example of asynchronous programming in JavaScript using callbacks and setTimeout
 * function to simulate asynchronous operations like fetching and processing data.
 */

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    callback("Data processed: " + data);
  }, 1000);
}

// calling fetchData function and passing a callback function to it
fetchData((result) => {
  // 1000s delays in [fetchData()]
  console.log(result);

  // 1000s delay in [processData()]
  processData(result, (processedResult) => {
    // Executed after the delay
    console.log(processedResult);
  });
});


