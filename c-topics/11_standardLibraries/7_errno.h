// --------------------- [ errno.h ] -----------------------

/*
errno.h is a header file that defines a set of macros used to report error conditions 
by library functions. The errno variable is typically a global variable that is set by 
system calls and library functions when they encounter errors. This variable is declared 
in errno.h, and it is typically an integer or a macro expanding to an integer value.
*/

/*
errno: Global variable used to store error codes set by functions upon failure.
perror(): Function to print a human-readable error message corresponding to the value of errno.
strerror(): Function to retrieve a string representation of a given error code.
errno.h Macros: Set of macros defining various error codes, such as EACCES, ENOENT, etc., each representing a specific error condition.
*/