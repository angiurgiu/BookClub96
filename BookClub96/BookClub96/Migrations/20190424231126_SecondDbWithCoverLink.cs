using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BookClub96.Migrations
{
    public partial class SecondDbWithCoverLink : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CoverLink",
                table: "Books",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Groups",
                keyColumn: "Id",
                keyValue: 1,
                column: "MeetingTime",
                value: new DateTime(2019, 5, 1, 23, 11, 25, 948, DateTimeKind.Utc));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverLink",
                table: "Books");

            migrationBuilder.UpdateData(
                table: "Groups",
                keyColumn: "Id",
                keyValue: 1,
                column: "MeetingTime",
                value: new DateTime(2019, 5, 1, 1, 5, 56, 649, DateTimeKind.Utc));
        }
    }
}
