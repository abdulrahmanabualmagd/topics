#include <stdio.h>

typedef struct
{
    char make[50];
    int modlel;
} Car;

struct Bus{
    char name[50];
    int model;
};

int main()
{
    Car car = {"German", 1998};
    printf("make: %s, model: %d\n", car.make, car.modlel);

    struct Bus bus = {"Italian", 2009};
    printf("make: %s, model: %d", bus.name, bus.model);

    return 0;
}