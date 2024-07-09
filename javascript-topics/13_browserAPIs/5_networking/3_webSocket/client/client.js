// Open live server to run the client side
// Using WebSocket with 
const ws = new WebSocket("ws://localhost:8080");

function sendMessage() {
  const message = document.getElementById("messageInput").value;
  ws.send(message);
}

ws.onmessage = function (event) {
  console.log(event.data);
};
