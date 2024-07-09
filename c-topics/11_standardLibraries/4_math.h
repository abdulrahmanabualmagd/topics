// --------------------- [ math.h ] -----------------------

/*
The match.h header file typically contains function declarations or prototypes for functions 
related to pattern matching or string manipulation in the C programming language. The exact 
functions and their implementations may vary depending on the specific library or 
implementation you're using
*/

/*
int match(const char *pattern, const char *text): This function checks if the given pattern matches the text string. It returns 1 if there is a match and 0 otherwise. It's commonly used for simple pattern matching operations, such as wildcard matching.
char *substring(const char *text, int start, int length): This function extracts a substring from the given text starting at the specified index (start) with the specified length. It returns a dynamically allocated string containing the extracted substring.
int index_of(const char *text, const char *substring): This function finds the index of the first occurrence of the specified substring within the given text. It returns the index of the substring if found, or -1 if the substring is not present in the text.
int last_index_of(const char *text, const char *substring): Similar to index_of, but finds the index of the last occurrence of the substring within the text.
int contains(const char *text, const char *substring): This function checks if the given text contains the specified substring. It returns 1 if the substring is found, and 0 otherwise.
int starts_with(const char *text, const char *prefix): Checks if the given text starts with the specified prefix. It returns 1 if the text starts with the prefix, and 0 otherwise.
int ends_with(const char *text, const char *suffix): Checks if the given text ends with the specified suffix. It returns 1 if the text ends with the suffix, and 0 otherwise.
char *replace(const char *text, const char *old_substring, const char *new_substring): This function replaces all occurrences of the old substring in the text with the new substring. It returns a dynamically allocated string containing the modified text.
*/
