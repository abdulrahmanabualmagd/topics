// --------------------- [ ctype.h ] -----------------------

/*
The ctype.h header file in C provides functions for testing and manipulating characters.
It contains functions that classify characters (such as whether they are alphanumeric,
alphabetic, numeric, etc.), as well as functions for converting characters to lowercase
or uppercase.
*/

/*
int isalnum(int c): Checks if the given character is alphanumeric (either a letter or a digit).
int isalpha(int c): Checks if the given character is alphabetic (a letter).
int isdigit(int c): Checks if the given character is a digit.
int isxdigit(int c): Checks if the given character is a hexadecimal digit.
int islower(int c): Checks if the given character is a lowercase letter.
int isupper(int c): Checks if the given character is an uppercase letter.
int isspace(int c): Checks if the given character is a whitespace character (space, tab, newline, etc.).
int ispunct(int c): Checks if the given character is a punctuation character.
int isgraph(int c): Checks if the given character has a graphical representation (i.e., is printable and not a space).
int isprint(int c): Checks if the given character is a printable character (including space).
int iscntrl(int c): Checks if the given character is a control character.
int tolower(int c): Converts the given character to lowercase if it is an uppercase letter; otherwise, it returns the character unchanged.
int toupper(int c): Converts the given character to uppercase if it is a lowercase letter; otherwise, it returns the character unchanged.
*/