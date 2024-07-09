// --------------------- [ stdarg.h ] -----------------------

/*
stdarg.h provides a standardized way to work with variable argument lists in C
functions. It allows functions to accept a variable number of arguments,
improving flexibility and usability. This is commonly used in functions
like printf() and scanf() where the number and types of arguments may vary.
*/

/*
Macros and Types:
-   va_list: This is a type used to declare a variable that will hold the information necessary to access the variable arguments. It is typically declared as a pointer.
-   va_start(ap, last_arg): This macro initializes the va_list variable ap to point to the first variable argument following the last_arg parameter. It must be called before accessing the variable arguments.
-   va_arg(ap, type): This macro retrieves the next argument from the variable argument list pointed to by ap. It also specifies the type of the argument being retrieved.
-   va_end(ap): This macro cleans up the va_list variable ap after variable argument processing is complete. It should be called at the end of the function that uses variable arguments.
-   va_copy(dest, src): This macro copies the variable argument list from src to dest, allowing for multiple traversals of the same argument list.
*/