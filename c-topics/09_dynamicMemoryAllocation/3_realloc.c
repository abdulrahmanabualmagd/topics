#include <stdio.h>
#include <stdlib.h>

// realloc => Reallocation, used to change the size of the previously allocated memory block
// Takes two argument [ a poiter to the previously allocated memory, the new size ]

void main()
{
    // Previously allocated pointer
    int *ptr = (int *)malloc(4 * sizeof(int));
    // It returns a pointer to void so we casting it to a pointer to integer using '(int*)'

    // check Allocation Failure
    if (ptr == NULL)
        exit(1); // Terminate the program execution and don't continue

    // Reallocate a previously allocated pointer
    ptr = (int *)realloc(ptr, 5 * sizeof(int));

    // Check Reallocation Failure
    if (ptr == NULL)
        exit(1); // Terminate the program execution and don't continue
}