document.addEventListener('click', function(event) {
    console.log('Event type:', event.type); // Type of the event (e.g., click)
    console.log('Target element:', event.target); // Element that triggered the event
    console.log('Current target element:', event.currentTarget); // Element that the event listener is attached to
    console.log('Event coordinates (clientX, clientY):', event.clientX, event.clientY); // Mouse coordinates relative to the viewport
    console.log('Event coordinates (pageX, pageY):', event.pageX, event.pageY); // Mouse coordinates relative to the document
    console.log('Key pressed:', event.key); // Key pressed (for keyboard events)
    console.log('Mouse button pressed:', event.button); // Mouse button pressed (for mouse events)
    console.log('Event timestamp:', event.timeStamp); // Timestamp when the event occurred
    console.log('Event modifiers (ctrlKey, shiftKey, altKey, metaKey):', event.ctrlKey, event.shiftKey, event.altKey, event.metaKey); // Modifier keys pressed during the event
    console.log('Related target element (for mouseover and mouseout events):', event.relatedTarget); // Element being entered or exited during mouseover and mouseout events
    console.log('Event propagation stopped:', event.cancelBubble); // Indicates if event propagation has been stopped
    console.log('Default action prevented:', event.defaultPrevented); // Indicates if the default action of the event has been prevented
});
