/*
 * Seeding is refering to the process of populating a database with initial data during the application's database initialization
 * 
 * There are serveral ways to seed data into a databae like:
 *  - Override OnModelCreating Method (FluentAPI)
 *  - Using Migrations  (migrationBuilder.InsertData() | migrationBduiler.Sql())
 *  - Implement IEntityTypeConfiguration<EntityName>
 *  - Using Initializer in DbContext
 *  - Using ConfigureMethod in Startup
 *  
 * Which one to use :
 *  - There is no one size fits all the solution, and the best practice may vary based on the size and complexity of your project, team preferences, and specific requirements
 *  
 */
using EntityFrameworkCore.Models;
using DataSeeding.Data;
using Microsoft.EntityFrameworkCore;

namespace DataSeeding
{
    class Program
    {
        static void Main()
        {
            ApplicationDbContext context = new ApplicationDbContext();

            IEnumerable<School> items = context.Schools.Include(s => s.Students).ToList();

            foreach (var item in items)
            {
                Console.WriteLine(item.Name);

                foreach (var subitem in item.Students)
                {
                    Console.WriteLine("--" + subitem.Name);
                }

            }
        }
    }
}