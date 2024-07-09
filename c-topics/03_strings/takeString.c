#include<stdio.h>
#include<string.h>

int main(){
    
    // Declaring a variable holds an array of chars (string)
    char str[50];
    char str2[50];

    printf("Enter your name\n");
    scanf("%s", str);       // It takes the input chars until it meets the first space
    // Input: mohamed ahmed => Output: mohamed

    printf("\n %s", str);

    printf("\n Enter your name again:\n");
    fgets(str2, sizeof(str2), stdin);

    printf("\n%s", str2);
    
    return 0;
}