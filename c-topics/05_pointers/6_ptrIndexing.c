#include <stdio.h>

int main(){

    // Declaring and Initailizing an array of integers    
    int arr[] = {1,2,3,4};

    // Declaring and Initializing a pointer to an integer
    int *ptr = arr;

    printf("%d", ptr[1]);   // Output: prints the second element of the arr which is [2]

    return 0;
}