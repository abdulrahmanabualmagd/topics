using System;
using System.Reflection;

namespace Reflection
{

    class Program
    {
        static void Main(string[] args)
        {
            // Get the Type object for MyClass
            Type myClassType = typeof(MyClass);

            // Get all public methods of MyClass
            MethodInfo[] methods = myClassType.GetMethods();
            foreach (var method in methods)
            {
                Console.WriteLine($"Method: {method.Name}");
            }

            // Get all public properties of MyClass
            PropertyInfo[] properties = myClassType.GetProperties();
            foreach (var property in properties)
            {
                Console.WriteLine($"Property: {property.Name}");
            }

            // Invoke a method dynamically
            object myClassInstance = Activator.CreateInstance(myClassType);
            MethodInfo myMethod = myClassType.GetMethod("MyMethod");
            myMethod.Invoke(myClassInstance, new object[] { "Hello, Reflection!" });

            // Set a property value dynamically
            PropertyInfo myProperty = myClassType.GetProperty("MyProperty");
            myProperty.SetValue(myClassInstance, 42);
            Console.WriteLine($"MyProperty value: {myProperty.GetValue(myClassInstance)}");
        }
    }
}