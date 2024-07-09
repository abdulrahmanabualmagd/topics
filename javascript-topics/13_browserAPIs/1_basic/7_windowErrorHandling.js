
// Error Handling
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error occurred:', message, 'at', source, 'line', lineno, 'column', colno, error);
};
throw new Error('Example Error'); // Output: Error message in the console
