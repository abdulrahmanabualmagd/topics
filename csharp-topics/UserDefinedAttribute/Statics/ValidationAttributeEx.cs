using System;
using System.ComponentModel.DataAnnotations;
using UserDefinedAttribute.CustomValidationAttribute;

namespace UserDefinedAttribute.Examples
{

    // Class to test
    internal class Nums
    {
        // Use the custom validtion attribute
        [NumberValidationAttribute]
        public string Age { get; set; }
    }

    internal static class ValidationAttributeEx
    {
        public static void Run()
        {
            // Create an instance of Nums class
            var myObject = new Nums();

            // Assign a valid number to the Age property
            myObject.Age = "30";

            // Validate and print the result
            PrintValidationResult(myObject);

            // Assign an invalid value to the Age property
            myObject.Age = "Invalid";

            // Validate again and print the result
            PrintValidationResult(myObject);
        }

        private static void PrintValidationResult(Nums obj)
        {
            var validationContext = new ValidationContext(obj);
            var validationResults = new System.Collections.Generic.List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(obj, validationContext, validationResults, true);

            if (isValid)
            {
                Console.WriteLine("Object is valid.");
            }
            else
            {
                foreach (var validationResult in validationResults)
                {
                    Console.WriteLine(validationResult.ErrorMessage);
                }
            }
        }
    }
}
