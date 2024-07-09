// --------------------- [ stdint.h ] -----------------------

/*
stdint.h is useful for writing portable and more readable code, especially when dealing with low-level 
programming or when specific data sizes are required, as it provides a standard set of typedefs for 
exact-width integer types.
*/

/*
Types:
-   int8_t: 8-bit signed integer.
-   uint8_t: 8-bit unsigned integer.
-   int16_t: 16-bit signed integer.
-   uint16_t: 16-bit unsigned integer.
-   int32_t: 32-bit signed integer.
-   uint32_t: 32-bit unsigned integer.
-   int64_t: 64-bit signed integer.
-   uint64_t: 64-bit unsigned integer.

Macros:
-   INT8_MIN, INT16_MIN, INT32_MIN, INT64_MIN: Minimum values for signed integer types.
-   INT8_MAX, INT16_MAX, INT32_MAX, INT64_MAX: Maximum values for signed integer types.
-   UINT8_MAX, UINT16_MAX, UINT32_MAX, UINT64_MAX: Maximum values for unsigned integer types.

Additional Types:
-   intptr_t: Integer type capable of holding a pointer.
-   uintptr_t: Unsigned integer type capable of holding a pointer.
*/