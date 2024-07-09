function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}
            
function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data processed: " + data);
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log(result);
        return processData(result);
    })
    .then((processedResult) => {
        console.log(processedResult);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
