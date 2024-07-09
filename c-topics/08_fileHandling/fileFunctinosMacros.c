/* File Handling Functions */
// Opens a file and returns a file pointer
// FILE *fopen(const char *filename, const char *mode);

// Closes a file
// int fclose(FILE *stream);

// Writes formatted data to a file
// int fprintf(FILE *stream, const char *format, ...);

// Reads formatted data from a file
// int fscanf(FILE *stream, const char *format, ...);

// Writes a character to a file
// int fputc(int character, FILE *stream);

// Reads a character from a file
// int fgetc(FILE *stream);

// Reads a line from a file
// char *fgets(char *str, int n, FILE *stream);

// Writes a string to a file
// int fputs(const char *str, FILE *stream);

// Sets the file position indicator to the beginning of a file
// void rewind(FILE *stream);

// Checks for end-of-file indicator on a file
// int feof(FILE *stream);

// Returns the current file position indicator
// long ftell(FILE *stream);

// Sets the file position indicator to a specific location within a file
// int fseek(FILE *stream, long offset, int whence);

// Deletes a file
// int remove(const char *filename);

// Renames a file
// int rename(const char *old_filename, const char *new_filename);

// Checks for file errors
// int ferror(FILE *stream);


/* File Handling Macros */
// Represents a null pointer
// #define NULL ((void *)0)

// Represents end-of-file indicator
// #define EOF (-1)

// Maximum length of file name
// #define FILENAME_MAX (FOPEN_MAX-8)

// Default buffer size for file I/O operations
// #define BUFSIZ _IO_BUFSIZ

// Beginning of file, for fseek()
// #define SEEK_SET 0

// Current position of file pointer, for fseek()
// #define SEEK_CUR 1

// End of file, for fseek()
// #define SEEK_END 2
