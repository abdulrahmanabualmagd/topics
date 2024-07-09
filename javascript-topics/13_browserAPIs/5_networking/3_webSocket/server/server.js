// run @node server.js, to run the server side  
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("A new client connected");

  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);
    // Echo back the received message
    ws.send(`I Received: ${message}`);
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});
