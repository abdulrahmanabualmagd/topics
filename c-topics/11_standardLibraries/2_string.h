// --------------------- [ string.h ] -----------------------

/*
the string library, string.h, provides a set of functions for manipulating strings 
(sequences of characters). These functions allow you to perform various operations 
on strings such as copying, concatenating, comparing, searching, and tokenizing.
*/

/*
strlen(const char *str): Returns the length of the null-terminated string str, excluding the terminating null character.
strcpy(char *dest, const char *src): Copies the null-terminated string src into the null-terminated string dest.
strncpy(char *dest, const char *src, size_t n): Copies at most n characters from the null-terminated string src to dest. If src is less than n characters long, null characters are appended to dest to ensure dest is null-terminated.
strcat(char *dest, const char *src): Appends a copy of the null-terminated string src to the end of the null-terminated string dest, overwriting the null character at the end of dest, and then adding a new null character.
strncat(char *dest, const char *src, size_t n): Appends at most n characters from the null-terminated string src to the end of the null-terminated string dest. If src contains fewer than n characters, all characters from src are appended, and a null character is added.
strcmp(const char *str1, const char *str2): Compares the null-terminated strings str1 and str2. Returns an integer less than, equal to, or greater than zero if str1 is found, respectively, to be less than, to match, or be greater than str2.
strncmp(const char *str1, const char *str2, size_t n): Compares at most the first n characters of the null-terminated strings str1 and str2. Returns an integer less than, equal to, or greater than zero if the first n characters of str1 are found, respectively, to be less than, to match, or be greater than the first n characters of str2.
strcasecmp(const char *str1, const char *str2): Case-insensitive version of strcmp().
strncasecmp(const char *str1, const char *str2, size_t n): Case-insensitive version of strncmp().
strchr(const char *str, int c): Searches for the first occurrence of character c in the null-terminated string str. Returns a pointer to the first occurrence of c in str, or NULL if c is not found.
strrchr(const char *str, int c): Searches for the last occurrence of character c in the null-terminated string str. Returns a pointer to the last occurrence of c in str, or NULL if c is not found.
strstr(const char *haystack, const char *needle): Searches for the first occurrence of the null-terminated string needle within the null-terminated string haystack. Returns a pointer to the beginning of the located substring within haystack, or NULL if needle is not found.
*/