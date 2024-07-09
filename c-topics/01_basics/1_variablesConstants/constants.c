#include <stdio.h>

// Define PI as a constant
const float PI = 3.14159;

int main()
{
    // Calculate the area of a circle using the constant PI
    float radius = 5.0;
    float area = PI * radius * radius;

    // Print the result
    printf("The area of the circle is: %.2f\n", area);

    return 0;
}

/*
Initialization:
Constants must be initialized at the time of declaration.
Once initialized, the value of a constant cannot be modified throughout the program.

Mutability:
Constants are immutable; their values cannot be changed once they are initialized.

Usage:
Constants are typically used for values that remain constant throughout the program's execution, such as mathematical constants (e.g., pi), configuration parameters, or fixed values used in calculations.

Declaration:
Constants are declared using the const keyword followed by the data type and the constant name, like const float PI = 3.14159;.

Scope:
Constants usually have global scope, meaning they can be accessed from any part of the program where they are declared.

Lifetime:
Constants exist for the entire duration of the program.
*/