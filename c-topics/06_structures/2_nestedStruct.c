#include <stdio.h>

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[50];
    struct Date dob;
};

int main()
{
    struct Date date = {12, 5, 1998};
    struct Student student2 = {"Mohamed", date};

    struct Student student = {"Abdulrahman", {12, 5, 1998}};

    return 0;
}