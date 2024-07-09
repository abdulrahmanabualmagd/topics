#include <stdio.h>

void main()
{
    // Declaration and Initialization (Single Dimentional)
    int numbers[5] = {1, 2, 3, 4, 5};
    char vowels[] = {'a', 'e', 'i', 'o', 'u'};
    char str[] = "Hello";

    // Multi-dimensional Arrays
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};

    // Array Size
    int arrayTotalSize = sizeof(numbers);               // Size of (5 * sizeof(int)) => 20
    int arrayLength = sizeof(numbers) / sizeof(int);        

    // String Handling
    printf("String: %s\n", str);
}