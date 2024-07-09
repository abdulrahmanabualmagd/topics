
// Prevent Default Behavior
document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Link clicked, but navigation prevented');
});

// Stop Event Propagation ( stop the bubbling up further the tree )
document.getElementById('parentList').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Event propagation stopped');
});