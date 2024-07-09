// Append child
parentElement.appendChild(newChild);

// Remove child
parentElement.removeChild(childElement);

// Replace child
parentElement.replaceChild(newChild, oldChild);

// Create element
var newElement = document.createElement('tagName');

// Clone node
var clonedNode = originalNode.cloneNode(true); // pass true to clone all descendants, if false will clone only the parent clone 

// Insert adjacent HTML
// positions : [ beforebegin, afterbegin, beforeend, afterend ]
element.insertAdjacentHTML('position', 'html code [string]');
