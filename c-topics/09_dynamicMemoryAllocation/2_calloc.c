#include <stdio.h>
#include <stdlib.h>

// calloc => contiguous allocation, allocate a block of memory for an array of elements
// It returns null in failure

void main()
{
    // Declaring a Null Pointer
    int *ptr = (int *)calloc(4, sizeof(int));
    // It returns a pointer to void so we casting it to a pointer to integer using '(int*)'

    // Check Allocation Failure
    if (ptr == NULL)
        exit(1); // Terminate the program execution and don't continue
}