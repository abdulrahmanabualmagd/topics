// Singleton Pattern
const singletonObj = (function() {
    let instance;
    function createInstance() {
        // object creation logic
        return {
            // properties and methods
        };
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
const singletonInstance = singletonObj.getInstance();