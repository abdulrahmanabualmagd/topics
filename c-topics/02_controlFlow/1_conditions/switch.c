#include <stdio.h>

int main()
{
    int x = 5;
    switch (x)
    {
    case 1:
        printf("x is equat to one");
        break;
    case 2:
    case 3:
        printf("x is greater than 1");
        break;
    case 5:
        printf("x is equal to five");
    default:
        printf("Error!");
        // no need to write break;
    }

    return 0;
}