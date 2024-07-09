#include<stdio.h>

typedef union {
    _Bool bit_1;
    _Bool bit_2;
    _Bool bit_3;
    _Bool bit_4;
    _Bool bit_5;
    _Bool bit_6;
    _Bool bit_7;
    _Bool bit_8;
} Bits;

int main(){
    Bits bit;

    printf("%d", sizeof(bit));

    return 0;
}