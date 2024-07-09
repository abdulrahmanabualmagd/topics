/*
 *  Purpose of Using
 *          - Keep sensitive information, suah as API keys, connection strings, or other private configuration settings
 *          - These secrets are separated from your source code and project files (not pushable or movable)
 *          - This is very important when Working with a team or sharing code in a version-controlled environment
 * 
 *  Install these two packages to use configuration also to access secrets list 
 *          - Include="Microsoft.Extensions.Configuration" Version="5
 *          - Include="Microsoft.Extensions.Configuration.UserSecrets 
 *          
 *  Note: 
 *      - If we pushed the project the secrets won't be pushed
 *      - If we pulled the pushed project Only the initialization of the user-secrets will remain but without any secrets
 *      - On initialization of the project, it generates UserSecretsId and saved to the project file
 *          
 *  To Start
 *      - Init User Secrets
 *          - dotnet user-secrets init
 *      
 *      - Set a Secret
 *          - dotnet user-secrets set [SecretName] [SecretValue]
 *          
 *      - Show All Secrets
 *          - dotnet user-secrets list 
 *          
 *      - Clear All Secrets
 *          - dotnet user-secrets clear
 *          
 *      - Delete specified secret
 *          - dotnet user-secrets remove "SecretName"
 */
using Microsoft.Extensions.Configuration;

namespace User_Secrets
{
    class Program
    {
        static void Main()
        {
            var builder = new ConfigurationBuilder().AddUserSecrets<Program>();

            IConfigurationRoot configuration = builder.Build();

            // I've created a user secret and named id 'MySecret'
            string secretKey = configuration["MySecret"];

            Console.WriteLine(secretKey);
        }
    }
}