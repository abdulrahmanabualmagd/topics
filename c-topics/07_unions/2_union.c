#include<stdio.h>

union Byte{
    _Bool bit_1;
    _Bool bit_2;
    _Bool bit_3;
    _Bool bit_4;
    _Bool bit_5;
    _Bool bit_6;
    _Bool bit_7;
    _Bool bit_8;
};

int main(){

    union Byte b;

    printf("%d",sizeof(b));     // Output => 1 Byte

    return 0;
}