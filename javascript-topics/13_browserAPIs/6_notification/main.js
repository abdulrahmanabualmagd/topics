function showNotification() {
  // Check if the browser supports the Notifications API
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // If the user has already granted permission, create a notification
    var notification = new Notification("Hello, World!");
  } else if (Notification.permission !== "denied") {
    // Otherwise, request permission from the user
    Notification.requestPermission().then(function (permission) {
      // If the user grants permission, create a notification
      if (permission === "granted") {
        var notification = new Notification("Hello, World!");
        
      }
    });
  }
}
