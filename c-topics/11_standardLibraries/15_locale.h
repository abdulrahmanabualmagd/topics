// --------------------- [ locale.h ] -----------------------

/*
locale.h is useful for writing internationalized and localized C programs that need to 
adapt to different language and cultural conventions. It allows programs to handle 
locale-specific formatting and behavior, making them more flexible and usable across 
different regions and languages.
*/

/*
Functions:
-   setlocale(category, locale): This function sets or queries the program's current locale. It allows you to specify the category of locale information you want to set or retrieve (e.g., LC_ALL, LC_COLLATE, LC_CTYPE, LC_NUMERIC, LC_MONETARY, LC_TIME) and the desired locale string. Setting a locale affects how certain functions behave, such as those involving character classification, string comparison, and formatting of numeric and monetary values.
-   localeconv(): This function returns a pointer to a structure containing information about the current numeric and monetary formatting conventions for the current locale. The structure returned by localeconv() typically includes fields such as decimal point and thousands separator characters, currency symbol, and formatting conventions for currency values.

Macros:
-   LC_ALL, LC_COLLATE, LC_CTYPE, LC_NUMERIC, LC_MONETARY, LC_TIME: These macros represent categories of locale information that can be set or queried using setlocale(). LC_ALL sets or queries all locale categories simultaneously, while the other macros correspond to specific categories of locale information.
-   LC_*: These macros represent individual locale categories, such as character classification (LC_CTYPE), string collation (LC_COLLATE), numeric formatting (LC_NUMERIC), monetary formatting (LC_MONETARY), and date and time formatting (LC_TIME).
*/