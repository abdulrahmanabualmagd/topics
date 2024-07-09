#include <stdio.h>
#include <string.h>

int main() {

    char str1[50] = "Hello";
    char str2[50] = "World";
    char buffer[100];

    // strlen()
    printf("Length of str1: %zu\n", strlen(str1));

    // strcpy()
    strcpy(buffer, str1);
    printf("Copied string: %s\n", buffer);

    // strcat()
    strcat(str1, ", ");
    strcat(str1, str2);
    printf("Concatenated string: %s\n", str1);

    // strcmp()
    printf("Comparison result: %d\n", strcmp(str1, str2));

    // strncmp()
    printf("Comparison result (first 3 characters): %d\n", strncmp(str1, str2, 3));

    // strchr()
    printf("First occurrence of 'o' in str1: %s\n", strchr(str1, 'o'));

    // strstr()
    printf("First occurrence of 'World' in str1: %s\n", strstr(str1, str2));

    // strtok()
    char sentence[] = "This is a sample sentence";
    char *token = strtok(sentence, " ");
    while (token != NULL) {
        printf("Token: %s\n", token);
        token = strtok(NULL, " ");
    }

    // strncpy()
    char source[] = "Copy me!";
    char destination[20];
    strncpy(destination, source, 4);
    destination[4] = '\0'; // Ensure null terminator is added
    printf("Copied string (first 4 characters): %s\n", destination);

    return 0;
}
