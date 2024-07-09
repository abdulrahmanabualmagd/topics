#include <stdio.h>

int main()
{
    // Declaring and Initializing a pointer to an integer
    int *ptr;               // Points to a random address from the garbage (undetermined behavior when trying to change the value that containted by that address)
    int *nullPtr = NULL;    // Pointer points to nothing

    printf("%d", nullPtr);  // Output: Nothing
    printf("%d", *nullPtr); // Output: Nothing

    return 0;
}