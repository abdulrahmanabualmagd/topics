// Get current position
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

// Watch position changes
var watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

// Clear watch
navigator.geolocation.clearWatch(watchId);

// Success callback function
function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // Do something with the coordinates
}

// Error callback function
function errorCallback(error) {
    console.log("Error getting location: " + error.message);
}

// Options for geolocation (optional)
var options = {
    enableHighAccuracy: true,  // Request high accuracy location data (may increase battery usage)
    timeout: 5000,              // Maximum time (in milliseconds) to wait for a location response
    maximumAge: 0               // Maximum age (in milliseconds) of a cached location
};
