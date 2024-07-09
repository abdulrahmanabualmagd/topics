// Communication
window.postMessage('Message from window', '*'); // Output: Sends a message
let channel = new BroadcastChannel('test_channel');
channel.postMessage('Message via BroadcastChannel');
channel.close();
