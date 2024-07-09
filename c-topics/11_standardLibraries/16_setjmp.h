// --------------------- [ setjmp.h ] -----------------------

/*
setjmp.h provides a mechanism for non-local control flow in C programs, allowing for more 
complex control structures and error handling mechanisms. However, it should be used 
judiciously as misuse can lead to hard-to-understand and maintain code.
*/

/*
Functions and Macros:
-   setjmp(env): This function establishes a point in the program from which a non-local jump can be made using longjmp(). It saves the current execution context, including the program counter and stack pointer, in the jmp_buf variable env.
-   longjmp(env, val): This function performs a non-local jump to a previously established point in the program. It restores the execution context saved in the jmp_buf variable env by setjmp(), and optionally passes a value val that will be returned by the corresponding call to setjmp().
-   jmp_buf: This is a type representing a buffer used to save and restore the execution context for non-local jumps. It's typically implemented as an array type capable of holding the necessary machine-specific context information.
-   setjmp() and longjmp() together provide a way to perform non-local control transfers in C programs, allowing you to jump out of deeply nested function calls or exception handling contexts.

Use Cases:
-   Error handling: setjmp() and longjmp() can be used for implementing error recovery mechanisms where you need to jump out of nested function calls in response to an error condition.
-   Implementation of coroutines: They can be used to implement coroutines or cooperative multitasking by allowing control to be transferred between different execution contexts.
-   Implementing exception handling: Although not recommended, setjmp() and longjmp() can be used to implement a form of exception handling in C programs.
*/