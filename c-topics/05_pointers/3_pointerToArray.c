#include <stdio.h>

int main()
{
    // Declaration and Initialization of an array
    int numbers[5] = {1, 2, 3, 4, 5};

    // Declaration of a pointer to an array
    int(*ptr)[5]; // Pointer to an array of integers
    int *ptrr;    // Pointer to an integer

    // Assigning the address of the array to the pointer
    ptr = &numbers;     // '&' necessary     (the Addresses of the five elements are assigned)
    ptrr = numbers;     // '&' not necessary (Assigned to the address of first element in the array)

    printf("%d\n", ptr);  // Output: Address
    printf("%d\n", ptrr); // Output: Address
    printf("-------------------\n");

    printf("%d\n", ptr[0]);    // Output: Address
    printf("%d\n", (*ptr)[0]); // Output: Value
    printf("%d\n", ptrr[0]);   // Output: Value

    printf("-------------------\n");

    printf("%d\n", *ptr);  // Output: Address
    printf("%d\n",**ptr);  // Output: Address
    printf("%d\n", *ptrr); // Output Value

    return 0;
}
