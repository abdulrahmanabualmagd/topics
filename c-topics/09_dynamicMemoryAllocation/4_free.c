#include <stdio.h>
#include <stdlib.h>

// free => Used to release dynamically allocated memory

void main()
{
    // Allocate memory
    int *ptr = (int *)malloc(4 * sizeof(int));
    // It returns a pointer to void so we casting it to a pointer to integer using '(int*)'

    // check allocation failure
    if (ptr == NULL)
        exit(1); // Terminate the program execution and don't continue

    // Release dynamically allocated memory
    free(ptr);

    /*
        Note: after releasing the allocated memory the pointer become a [dangling pointer] potentially causing segmentation fault or data corruption
        Note: also after Deallocation the value that hold by the pointer remain unchanged 
        TIP: we have to assign a Null value to the pointer, this helps prevent accedential derefrencing of the dangling pointer 
    */
}