fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())      // Passing the response to the next .then
  .then((data) => console.log(data))        // Action with the passing Data
  .catch((error) => console.error("Error:", error));    // In case an error happened
