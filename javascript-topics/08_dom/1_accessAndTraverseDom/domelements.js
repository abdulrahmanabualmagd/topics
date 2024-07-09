// write the Id directly without '#' mark
var elementById = document.getElementById('elementId');

// write the class name
var elementsByClassName = document.getElementsByClassName('className');

// write the tag name
var elementsByTagName = document.getElementsByTagName('tagName');

// Using querySelector, we have to specify if it an id or a class name by usin (. , #)
// it take the first match of there are multiple 
var elementByQuerySelector = document.querySelector('selector');

// Using querySelectorAll, returns node list with all matched elements
// we have to specify if it an id or a class name by usin (. , #)
var elementsByQuerySelectorAll = document.querySelectorAll('selectors');

// Using getElementsByName
var elementsByName = document.getElementsByName('nameAttribute');



// Accessing parent node, the outer element
var parentNode = elementById.parentNode;

// Accessing child nodes, the inner element 
var childNodes = parentNode.children;

// Accessing next sibling, the next element
var nextSibling = elementById.nextSibling;

// Accessing previous sibling, the previous element
var previousSibling = elementById.previousSibling;
