using System.ComponentModel.DataAnnotations;

namespace UserDefinedAttribute.CustomValidationAttribute
{
    internal class NumberValidationAttribute : ValidationAttribute
    {
        // Override IsValid method 
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            // Check nullability
            if (value == null || string.IsNullOrWhiteSpace(value.ToString()))
                return ValidationResult.Success;
            
            // Convert to a string
            string numberString = value.ToString();

            // Use double.TryParse to check if the value is a valid number
            if (double.TryParse(numberString, out double number))
            {
                // Valid number, no validation error
                return ValidationResult.Success;
            }
            else
            {
                // Invalid number, return a validation error
                return new ValidationResult("The field must be a valid number.");
            }
        }
    }
}
