function innerFunction() {
    throw new Error("Error occurred in innerFunction");
}

function middleFunction() {
    innerFunction();
}

function outerFunction() {
    try {
        middleFunction();
    } catch (error) {
        console.error("Error caught in outerFunction:", error.message);
        throw error; // Propagate the error further
    }
}

try {
    outerFunction();
} catch (error) {
    console.error("Error caught in global scope:", error.message);
}
