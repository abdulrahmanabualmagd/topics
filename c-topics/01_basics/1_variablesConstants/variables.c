#include <stdio.h>

int main()
{
    // Define and initialize variables
    int age = 25;
    int count = 0;

    // Update the value of the variable "age"
    age = 30;

    // Print the values of variables
    printf("Age: %d\n", age);
    printf("Count: %d\n", count);

    return 0;
}

/*
Initialization:
Variables can be initialized at the time of declaration or later in the program.
They can also be declared without initialization, in which case they hold garbage values until explicitly assigned a value.

Mutability:
Variables are mutable; their values can be modified during the program's execution.

Usage:
Variables are used to store data that may change during program execution, such as user input, intermediate calculation results, or state information.

Declaration:
Variables are declared by specifying the data type followed by the variable name, like int age;.

Scope:
Variables can have different scopes, such as global or local.
Global variables are accessible throughout the program, while local variables are limited to the block or function in which they are declared.

Lifetime:
The lifetime of variables depends on their scope and storage class. Local variables typically exist only within the block or function in which they are declared, while global variables exist for the entire duration of the program.
*/