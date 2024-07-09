using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DataSeeding.DataSeeding.Data.Migrations
{
    /// <inheritdoc />
    public partial class Mi1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Schools",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schools", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SchoolId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Schools_SchoolId",
                        column: x => x.SchoolId,
                        principalTable: "Schools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Schools",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Elminya School" },
                    { 2, "Cairo School" },
                    { 3, "New Minya School" },
                    { 4, "Alex School" },
                    { 5, "Aswaan School" },
                    { 6, "Giza School" },
                    { 7, "Assiut School" }
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "Name", "SchoolId" },
                values: new object[,]
                {
                    { 1, "Liam", 1 },
                    { 2, "Noah", 3 },
                    { 3, "Oliver", 4 },
                    { 4, "Elijah", 2 },
                    { 5, "William", 5 },
                    { 6, "James", 7 },
                    { 7, "Benjamin", 6 },
                    { 8, "Lucas", 1 },
                    { 9, "Henry", 3 },
                    { 10, "Alexander", 4 },
                    { 11, "Mason", 2 },
                    { 12, "Michael", 5 },
                    { 13, "Ethan", 7 },
                    { 14, "Daniel", 6 },
                    { 15, "Jacob", 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_SchoolId",
                table: "Students",
                column: "SchoolId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Schools");
        }
    }
}
