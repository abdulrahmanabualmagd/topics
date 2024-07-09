using EntityFrameworkCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataSeeding.Data
{
    internal class ApplicationDbContext : DbContext
    {
        #region Ctor
        public ApplicationDbContext() { }

        // Not used in Console Application we could remove it 
        // Takes DbContextOptions which defines Database Provider & Connection String
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        #endregion
        
        #region Entities DbSet
        public DbSet<Student> Students { get; set; }
        public DbSet<School> Schools { get; set; }
        #endregion

        #region OnConfiguring
        // This method could be used instead of Ctor which takes parameter DbContextOptions in ASP.Net application
        // Specifying the database provider and connection string
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=.;database=FluentAPISeed;trusted_connection=true;TrustServerCertificate=True;");
        }
        #endregion

        #region Seeding
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            #region Seed Schools Data
            modelBuilder.Entity<School>().HasData(
               new School { Id = 1, Name = "Elminya School" },
               new School { Id = 2, Name = "Cairo School" },
               new School { Id = 3, Name = "New Minya School" },
               new School { Id = 4, Name = "Alex School" },
               new School { Id = 5, Name = "Aswaan School" },
               new School { Id = 6, Name = "Giza School" },
               new School { Id = 7, Name = "Assiut School" }
            );
            #endregion

            #region Seed Students Data
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = 1, Name = "Liam", SchoolId = 1 },
                new Student { Id = 2, Name = "Noah", SchoolId = 3 },
                new Student { Id = 3, Name = "Oliver", SchoolId = 4 },
                new Student { Id = 4, Name = "Elijah", SchoolId = 2 },
                new Student { Id = 5, Name = "William", SchoolId = 5 },
                new Student { Id = 6, Name = "James", SchoolId = 7 },
                new Student { Id = 7, Name = "Benjamin", SchoolId = 6 },
                new Student { Id = 8, Name = "Lucas", SchoolId = 1 },
                new Student { Id = 9, Name = "Henry", SchoolId = 3 },
                new Student { Id = 10, Name = "Alexander", SchoolId = 4 },
                new Student { Id = 11, Name = "Mason", SchoolId = 2 },
                new Student { Id = 12, Name = "Michael", SchoolId = 5 },
                new Student { Id = 13, Name = "Ethan", SchoolId = 7 },
                new Student { Id = 14, Name = "Daniel", SchoolId = 6 },
                new Student { Id = 15, Name = "Jacob", SchoolId = 1 }
            ); 
            #endregion
        }
        #endregion

    }
}
