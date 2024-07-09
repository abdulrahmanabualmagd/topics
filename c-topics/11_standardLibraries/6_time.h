// --------------------- [ time.h ] -----------------------

/*
The time.h header file in C provides functionality for working with date and time. It 
defines various types, functions, and macros for time-related operations, including 
getting the current time, formatting and parsing time values, calculating time 
differences, and converting between different time representations.
*/

/*
Types:
-   time_t: Represents time values, typically measured in seconds since the Unix epoch (January 1, 1970).
-   struct tm: Represents broken-down time, containing members for seconds, minutes, hours, day of the month, month, year, day of the week, day of the year, and whether daylight saving time is in effect.

Functions for Time Manipulation:
-   time(): Returns the current calendar time as a time_t value.
-   gmtime(): Converts a time_t value into a struct tm representing UTC (Coordinated Universal Time).
-   localtime(): Converts a time_t value into a struct tm representing the local time, considering the time zone and daylight saving time settings.
-   mktime(): Converts a struct tm representing a local time into a time_t value.

Formatting and Parsing Time:
-   strftime(): Formats a struct tm into a character string according to a format specification.
-   strptime(): Parses a character string into a struct tm according to a format specification.

Timer Functions:
-   clock(): Returns the processor time consumed by the program.
-   difftime(): Calculates the difference between two time_t values.

Sleeping Functions:
-   sleep(): Suspends the execution of the program for a specified number of seconds.
-   usleep(): Suspends the execution of the program for a specified number of microseconds.

Timestamps and Timing Functions:
-   time(): Retrieves the current time in seconds since the epoch.
-   difftime(): Calculates the difference between two times.
-   clock(): Provides processor time used by the program.

Other Utility Functions:
-   ctime(): Converts a time_t value into a human-readable string representing the local time.
-   asctime(): Converts a struct tm into a human-readable string representing the local time.
-   asctime_r(): Thread-safe version of asctime().
*/