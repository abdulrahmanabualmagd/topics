async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1000);
    });
}

async function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data processed: " + data);
        }, 1000);
    });
}

(async () => {
    try {
        const result = await fetchData();   // Execution will pause here until resolving the promise
        console.log(result);
        const processedResult = await processData(result);  // Execution will pause here until resolving the promise
        console.log(processedResult);
    } catch (error) {
        console.error("Error:", error); 
    }
})();
