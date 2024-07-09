#include <stdio.h>
#include <stdlib.h> // Requried for dynamic allocation

// malloc => memory allocation, it is used to allocate a block of memory of a specified size in bytes
// It returns null in failure

void main()
{
    // Declaring a Null Pointer
    int *ptr = (int *)malloc(4 * sizeof(int));
    // It returns a pointer to void so we casting it to a pointer to integer using '(int*)'

    // Check if the allocation done successfully!
    if (ptr == NULL)
        exit(1); // Terminate the program execution and don't continue
}