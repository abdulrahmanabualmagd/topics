// Method 1: addEventListener
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Method 2: Inline event handler in HTML [ onclick = functionName ] | [ onclick = () => { console.log('clicked') } ]
// <button id="myButton" onclick="alert('Button clicked!')">Click me</button>

// Method 3: Using the DOM Level 0 event handler property
document.getElementById('myButton').onclick = function() {
    alert('Button clicked!');
};

// Method 4: Using the onEvent attribute in HTML
// <button id="myButton" onmouseover="alert('Mouse over!')">Hover over me</button>

