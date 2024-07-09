#include <stdio.h>

int main()
{
    // Declaring and Initializing an array of 6 elements
    int arr[] = {1, 2, 3, 4, 5, 6};

    // Declaring an integer to an integer
    int *ptr;

    // Assign the address of the first element of the array to the pointer
    ptr = arr;

    // Dereferncing
    int y = *ptr;
    printf("Dereferencing: %d\n", y);

    // Indexing
    printf("Indexing: %d\n", ptr[2]);

    // Arithmatic
    printf("Value Postfix: %d\n", (*ptr)++);   // Add 1 to the value of x
    printf("Address Postfix: %d\n", *(ptr++)); // Add 1 to the value of x
    printf("Address PostFix: %d\n", ptr++);    // Points to the next address in the memory, the step is depend on the size of the pointer type (int => 4 bytes (4steps in each increment))
    printf("Address Postfix: %d\n", *ptr++);   // Get the value of x and then Point to the next address
    printf("Address Prefix: %d\n", *++ptr);    // Point to the next address and then get the value of x

    return 0;
}