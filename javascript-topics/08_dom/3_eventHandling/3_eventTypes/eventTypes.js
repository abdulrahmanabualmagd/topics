// Mouse events
click              // Triggered when a mouse button is clicked
dblclick           // Triggered when a mouse button is double-clicked
mousedown          // Triggered when a mouse button is pressed down on an element
mouseup            // Triggered when a mouse button is released
mousemove          // Triggered when the mouse pointer is moved over an element
mouseover          // Triggered when the mouse pointer enters an element
mouseout           // Triggered when the mouse pointer leaves an element
mouseenter         // Triggered when the mouse pointer enters an element, but not its children
mouseleave         // Triggered when the mouse pointer leaves an element, but not its children
contextmenu        // Triggered when the right mouse button is clicked to open the context menu

// Keyboard events
keydown            // Triggered when a key is pressed down
keyup              // Triggered when a key is released
keypress           // Triggered when a key is pressed down and then released

// Form events
submit             // Triggered when a form is submitted
reset              // Triggered when a form is reset
focus              // Triggered when an element gains focus
blur               // Triggered when an element loses focus
change             // Triggered when the value of an input element is changed (for text inputs, select elements, etc.)
input              // Triggered when the value of an input element is changed (for text inputs, select elements, etc.), including through typing or pasting
select             // Triggered when text is selected in an input element

// Window events
load               // Triggered when the window has finished loading
unload             // Triggered when the window is being unloaded
resize             // Triggered when the window is resized
scroll             // Triggered when the document is scrolled
DOMContentLoaded  // Triggered when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

// Drag and drop events
dragstart          // Triggered when a drag operation starts
drag               // Triggered when an element is being dragged
dragend            // Triggered when a drag operation ends
dragenter          // Triggered when a dragged element enters a drop target
dragleave          // Triggered when a dragged element leaves a drop target
dragover           // Triggered when a dragged element is over a drop target
drop               // Triggered when a dragged element is dropped on a drop target

// Touch events
touchstart         // Triggered when a touch point is placed on the touch surface
touchmove          // Triggered when a touch point is moved along the touch surface
touchend           // Triggered when a touch point is removed from the touch surface
touchcancel        // Triggered when a touch event is interrupted

// Media events
play               // Triggered when media playback begins
pause              // Triggered when media playback is paused
ended              // Triggered when media playback completes
volumechange       // Triggered when the volume of the media changes
durationchange     // Triggered when the duration of the media changes

// Animation events
animationstart     // Triggered when a CSS animation starts
animationend       // Triggered when a CSS animation completes
animationiteration // Triggered when a CSS animation completes one iteration

// Transition events
transitionend      // Triggered when a CSS transition completes
