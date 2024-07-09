// --------------------- [ signal.h ] -----------------------


/*
signal.h provides a mechanism for handling signals in C programs, allowing them to respond 
to various events such as interrupts, errors, and termination requests. Proper signal 
handling is essential for robust and reliable software, especially in systems programming 
and multi-process applications.
*/

/*
Functions:
-   signal(signum, handler): This function sets the signal handler for the specified signal signum to the function handler. The handler can be a function pointer to a custom signal handler function or one of the predefined signal handling options (SIG_DFL, SIG_IGN).
-   raise(signum): This function sends the signal signum to the current process, causing the corresponding signal handler to be executed if one is installed.

Macros:
-   Macros for specifying signal numbers: Constants like SIGINT, SIGTERM, SIGSEGV, etc., represent specific signal numbers for common signals such as interrupt, termination, segmentation fault, etc.

Predefined signal handling options:
-   SIG_DFL: Default action for the signal.
-   SIG_IGN: Ignore the signal.
-   SIG_ERR: Indicates an error occurred while setting the signal handler.

Signal Handlers:
-   A signal handler is a function that is executed when a signal of a specific type is received by a process. It can be a user-defined function or one of the predefined handlers.
-   Custom signal handlers should have the signature void handler(int signum), where signum is the signal number.
-   Signal handlers should be short and simple, as they execute asynchronously and interrupt the normal flow of the program.

Signal Handling:
-   Signals can be caught, ignored, or handled using signal handlers set up with the signal() function.
-   Signal handlers can perform cleanup operations, handle errors gracefully, or implement custom behavior in response to specific signals.
*/