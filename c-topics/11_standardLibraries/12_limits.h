// --------------------- [ limits.h ] -----------------------

/*
limits.h is crucial for writing portable C code, as it provides information about the size 
and range of integer types on different systems. It allows programmers to write code that 
is independent of the underlying hardware architecture and compiler implementation.
*/

/*
Macros:
-   CHAR_BIT: This macro represents the number of bits in a char data type.

Macros for minimum and maximum values for various integer types:
-   CHAR_MIN, CHAR_MAX: Minimum and maximum values for a char.
-   SCHAR_MIN, SCHAR_MAX: Minimum and maximum values for a signed char.
-   UCHAR_MAX: Maximum value for an unsigned char.
-   SHRT_MIN, SHRT_MAX: Minimum and maximum values for a short int.
-   USHRT_MAX: Maximum value for an unsigned short int.
-   INT_MIN, INT_MAX: Minimum and maximum values for an int.
-   UINT_MAX: Maximum value for an unsigned int.
-   LONG_MIN, LONG_MAX: Minimum and maximum values for a long int.
-   ULONG_MAX: Maximum value for an unsigned long int.
-   LLONG_MIN, LLONG_MAX: Minimum and maximum values for a long long int.
-   ULLONG_MAX: Maximum value for an unsigned long long int.

Other implementation-specific macros:
-   MB_LEN_MAX: Maximum number of bytes in a multibyte character.

Various macros defining the maximum and minimum values for floating-point types 
-    (FLT_MAX, FLT_MIN, DBL_MAX, DBL_MIN, LDBL_MAX, LDBL_MIN), 
َ     if the system supports floating-point arithmetic.
*/