#include <stdio.h>

int main()
{
    // Declare a pointer to a file
    FILE *filePointer;

    // Declare a buffer to store the reading data from the file
    char buffer[255] = "";

    // Assign file to the pointer
    filePointer = fopen("text.txt", "a+"); // "a" => read and write mode, other modes are [r, w, a+]

    // Check open failure
    if (filePointer == NULL)
        printf("Fiailed to open the file");

    // Read data from file and store it in the buffer
    fread(buffer, sizeof(char), sizeof(buffer) / sizeof(char), filePointer);

    // Print data from buffer
    printf("%s", buffer);

    // Write to the file
    fwrite("\nhello there and welocome", sizeof(char), sizeof(buffer), filePointer);

    // Close the file
    fclose(filePointer);
}