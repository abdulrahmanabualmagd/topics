// --------------------- [ stddef.h ] -----------------------


/*
stddef.h provides essential standard definitions for types and macros that are widely used in 
C programming. It improves portability and readability by ensuring consistent definitions 
across different platforms and implementations.
*/

/*
Macros and Types:
-   NULL: This macro is typically defined as a null pointer constant, representing a pointer that doesn't point to any object or function.
-   size_t: This is an unsigned integer type used to represent the sizes of objects in memory. It's commonly used with the sizeof operator and for array indexing.
-   ptrdiff_t: This is a signed integer type used to represent the difference between two pointers. It's commonly used for pointer arithmetic.
-   offsetof(type, member): This macro evaluates to the offset in bytes of the specified member within the specified type. It's commonly used in conjunction with structures to calculate the offset of a member.
-   wchar_t: This is an integer type used to represent wide characters. It's commonly used in functions dealing with wide character strings.
-   max_align_t: This is an alignment type used to represent the maximum alignment requirement for any data type. It's commonly used for alignment considerations in memory allocation and data structure definitions.
*/