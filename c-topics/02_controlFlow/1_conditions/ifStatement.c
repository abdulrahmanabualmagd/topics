#include <stdio.h>

int main()
{
    int x = 5;

    // if one condition achieved it won't look for the rest
    if (x == 6)
    {
        printf("x is equal to 6");
    }
    else if (x == 5)
    {
        printf("x is equal to 5");
    }
    else
    {
        printf("Error!");
    }

    return 0;
}