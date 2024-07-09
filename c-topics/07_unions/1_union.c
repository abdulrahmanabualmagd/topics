#include <stdio.h>
#include <string.h>

/*
    user-defined data type that allows you to store different types of data in the same memory location. 
    Unlike structures, where each member has its own separate memory location, all members of a union share 
    the same memory location.
*/

union Data
{
    int i;
    double f;
    char str[10];
};

int main()
{
    union Data data;

    data.i = 10;
    printf("data.i: %d\n", data.i);

    data.f = 3.14;
    printf("data.f: %.2f\n", data.f);

    strcpy(data.str, "Hello");
    printf("data.str: %s\n", data.str);

    printf("%zu", sizeof(data));
    return 0;
}
