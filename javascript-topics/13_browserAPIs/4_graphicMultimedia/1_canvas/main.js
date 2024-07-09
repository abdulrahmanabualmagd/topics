// Get the canvas element and its 2D rendering context
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// Drawing methods
context.fillStyle = 'red';
context.fillRect(50, 50, 100, 100);

context.strokeStyle = 'blue';
context.strokeRect(200, 50, 100, 100);

context.clearRect(100, 100, 50, 50);

context.beginPath();
context.moveTo(300, 200);
context.lineTo(400, 200);
context.lineTo(350, 300);
context.closePath();
context.fillStyle = 'green';
context.fill();

context.arc(500, 200, 50, 0, Math.PI * 2);
context.stroke();

// Transformations
context.translate(100, 100);
context.rotate(Math.PI / 4);
context.scale(2, 2);

// Drawing text
context.font = '30px Arial';
context.fillStyle = 'black';
context.fillText('Hello, Canvas!', 50, 50);

// Image drawing
var img = new Image();
img.src = 'example.png';
img.onload = function() {
    context.drawImage(img, 200, 200);
};

// Animation
function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update animation state
    
    // Draw shapes, text, images, etc.
    
    requestAnimationFrame(draw);
}
draw(); // Start the animation loop

// Event handling
canvas.addEventListener('click', function(event) {
    // Handle click event
});

canvas.addEventListener('mousemove', function(event) {
    // Handle mouse move event
});

canvas.addEventListener('keydown', function(event) {
    // Handle keydown event
});
