#include <stdio.h>

int main()
{
    // Declaration of a pointer to an integer
    int *ptr;               // Non initialized variables and pointers have a random numbers from garbage

    // Declare and Initialize a variable
    int x = 2;

    // Initialization
    //*ptr = x;            // Assign x to the address where it refers to (It may deny the process (undetermined behavior) depen on what it is pointing to )
    ptr = &x; // make the pointer points to the x address and have its value

    printf("%d\n", &ptr); // Output: Address of the Pointer itself
    printf("%d\n", ptr);  // Output: Address of x
    printf("%d\n", *ptr); // Output: Value of x

    return 0;
}