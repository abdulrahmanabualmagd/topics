#include <stdio.h>

int main()
{
    // Character Array
    char str[] = "Abdulrahman";
    // String Literals
    char *ptr = "Mohamed";

    // Null Terminator '\o', "Mohamed" is actually stored as => {'M', 'o', 'h', 'a', 'm', 'e', 'd', \o}
    printf("%c", ptr[7]); // Output Null

    return 0;
}