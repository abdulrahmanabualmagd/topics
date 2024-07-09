// --------------------- [ stdio.h ] -----------------------

/*
The stdio library in C, also known as the Standard I/O library, provides a set of
functions for input and output operations. It's part of the standard C library (<stdio.h>)
and is used extensively for tasks such as reading from and writing to files, handling
standard input/output streams (stdin, stdout, and stderr), and formatted input/output operations.
*/

/*
Standard Input/Output Functions:
    printf(): Prints formatted output to stdout.
    scanf(): Reads formatted input from stdin.
    getchar(): Reads a single character from stdin.
    putchar(): Writes a single character to stdout.
    gets(), puts(): Input/output of strings (deprecated due to security risks).

Error Handling:
    perror(): Prints a descriptive error message to stderr.
    feof(), ferror(): File status checking functions.

File Input/Output Functions:
    fopen(): Opens a file and returns a file pointer.
    fclose(): Closes a file.
    fgets(): Reads a line from a file.
    fputs(): Writes a string to a file.
    fprintf(): Writes formatted output to a file.
    fscanf(): Reads formatted input from a file.
    fseek(), ftell(), rewind(): File position operations.

Buffer Management:
    setbuf(), setvbuf(): Controls buffering for a file.
    fflush(): Flushes the output buffer.

Character Input/Output Functions:
    fgetc(), fputc(): Reads/writes a single character to a file.
    getc(), putc(): Similar to fgetc() and fputc() but implemented as macros.
    ungetc(): Pushes a character back onto the input stream.

Formatted Output:
    sprintf(), snprintf(): Writes formatted output to a string.
*/