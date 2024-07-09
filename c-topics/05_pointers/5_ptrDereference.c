#include<stdio.h>

int main(){
    
    // Declaring and Initializing a variable
    int x = 5; 

    // Declaring and Initializing a pointer to an integer 
    int *ptr = &x;

    // Dereference
    int y = *ptr;

    printf("%d", y);    // Output: value of x

    return 0;
}