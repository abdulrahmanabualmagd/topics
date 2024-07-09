#include <stdio.h>

int main()
{
    // Declaring and Initializing an integer value
    int x = 5;

    // Declaring and Initializing pointer ane make it points to the address of x
    int *ptr = &x;

    // Declaring and initializing Pointer to Pointer which take the address of the ptr,
    int **ptrToPtr = &ptr;

    printf("Address of the ptrToPtr: %d\n", &ptrToPtr); // Output: Address of ptrtoptr itself
    printf("Address of ptr: %d\n", ptrToPtr);           // Output: Address of ptr
    printf("Address of x: %d\n", *ptrToPtr);            // Output: Address of x
    printf("Value of x: %d\n", **ptrToPtr);             // Output: value of x

    return 0;
}