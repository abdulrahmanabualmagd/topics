#include <stdio.h>

int main()
{
    _Bool b;
    printf("%zu", sizeof(b)); // 1 byte

    char c;
    printf("Size of char: %zu bytes\n", sizeof(c)); // 1 byte

    unsigned char uc;
    printf("Size of unsigned char: %zu bytes\n", sizeof(uc)); // 1 byte

    short s;
    printf("Size of short: %zu bytes\n", sizeof(s)); // 2 bytes

    unsigned short us;
    printf("Size of unsigned short: %zu bytes\n", sizeof(us)); // 2 bytes

    int i;
    printf("Size of int: %zu bytes\n", sizeof(i)); // 4 bytes

    unsigned int ui;
    printf("Size of unsigned int: %zu bytes\n", sizeof(ui)); // 4 bytes

    long l;
    printf("Size of long: %zu bytes\n", sizeof(l)); // 4 bytes

    unsigned long ul;
    printf("Size of unsigned long: %zu bytes\n", sizeof(ul)); // 4 bytes

    long long ll;
    printf("Size of long long: %zu bytes\n", sizeof(ll)); // 8 bytes

    unsigned long long ull;
    printf("Size of unsigned long long: %zu bytes\n", sizeof(ull)); // 4 bytes

    float f;
    printf("Size of float: %zu bytes\n", sizeof(f)); // 4 bytes

    double d;
    printf("Size of double: %zu bytes\n", sizeof(d)); // 8 bytes

    long double ld;
    printf("Size of long double: %zu bytes\n", sizeof(ld)); // 12 bytes

    return 0;
}