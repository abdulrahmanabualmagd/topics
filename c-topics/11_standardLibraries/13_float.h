// --------------------- [ float.h ] -----------------------

/*
float.h is essential for writing portable C code that deals with floating-point arithmetic. 
It allows programmers to adapt their code to different systems while maintaining consistency 
in precision, range, and behavior of floating-point operations.
*/

/*
Macros:

Macros for characteristics of float:
-   FLT_RADIX: Base of the exponent representation.
-   FLT_MANT_DIG: Number of base FLT_RADIX digits in the floating-point significand.
-   FLT_DIG: Number of decimal digits of precision.
-   FLT_MIN_EXP: Minimum negative integer such that FLT_RADIX raised to the power of one less than that integer is a normalized floating-point number.
-   FLT_MIN_10_EXP: Minimum negative integer such that 10 raised to the power of that integer is a normalized floating-point number.
-   FLT_MAX_EXP: Maximum positive integer such that FLT_RADIX raised to the power of one less than that integer is a representable finite floating-point number.
-   FLT_MAX_10_EXP: Maximum positive integer such that 10 raised to the power of that integer is a representable finite floating-point number.
-   FLT_MAX: Maximum finite floating-point number.
-   FLT_EPSILON: Smallest positive floating-point number x such that 1.0 + x != 1.0.
-   FLT_MIN: Minimum normalized positive floating-point number.
-   Similar macros exist for double and long double types with prefixes DBL_ and LDBL_, respectively.
-   DECIMAL_DIG: Minimum number of decimal digits needed to represent all distinct floating-point values of the given type.
*/