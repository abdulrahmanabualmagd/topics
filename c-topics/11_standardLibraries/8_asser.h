// --------------------- [ assert.h ] -----------------------

/*
assert.h is a header file that defines macros for debugging purposes. It's 
typically included at the beginning of a C program to use assertions.
*/

/*
assert(expression): This macro tests the given expression and if it evaluates to false (zero), it calls the abort() function, which terminates the program and prints an error message indicating the location of the failed assertion.
static_assert(expression, message): This macro is used for compile-time assertions. It evaluates the expression at compile time and produces a compilation error with the specified message if the expression evaluates to false.
NDEBUG: This macro, when defined, disables the effect of the assert() macro. It's often used in release builds to remove the overhead of assertions.
*/