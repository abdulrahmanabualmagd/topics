// Check if the Device Orientation API is supported
if (window.DeviceOrientationEvent) {
    // Add event listener for device orientation changes
    window.addEventListener('deviceorientation', handleOrientation);
    
    // Add event listener for device motion changes
    window.addEventListener('devicemotion', handleMotion);
    
    function handleOrientation(event) {
      // Access orientation data
      var alpha = event.alpha; // rotation around the z-axis
      var beta = event.beta;   // rotation around the x-axis
      var gamma = event.gamma; // rotation around the y-axis
      
      // Do something with the orientation data
      console.log("Alpha: " + alpha + ", Beta: " + beta + ", Gamma: " + gamma);
    }
    
    function handleMotion(event) {
      // Access motion data
      var acceleration = event.acceleration;         // Linear acceleration along the x, y, and z axes
      var accelerationIncludingGravity = event.accelerationIncludingGravity; // Acceleration including gravity along the x, y, and z axes
      var rotationRate = event.rotationRate;         // Angular velocity around the x, y, and z axes
      
      // Do something with the motion data
      console.log("Acceleration: ", acceleration);
      console.log("Acceleration including gravity: ", accelerationIncludingGravity);
      console.log("Rotation rate: ", rotationRate);
    }
  } else {
    console.log('Device Orientation API not supported.');
  }
  