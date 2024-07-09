#include <stdio.h>

// Declaration of a struct named Person
struct Person
{
    char name[50];
    int age;
    float salary;
};

// Declaration of a nested struct named Address
struct Address
{
    char street[50];
    char city[50];
    char state[3];
    char zip[10];
};

int main()
{
    // Initialization of a struct variable
    struct Person person1 = {"John", 30, 50000.0};

    // Initialization of a nested struct variable
    struct Address address = {"123 Main St", "Anytown", "NY", "12345"};

    return 0;
}
