using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class classroom_subject_parent_teacher_migrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassRoom_Teacher_CurrentTeacherId",
                table: "ClassRoom");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubject_ClassRoom_ClassRoomId",
                table: "ClassSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubject_Teacher_SubjectTeacherId",
                table: "ClassSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_Parent_Students_StudentId",
                table: "Parent");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_ClassRoom_CurrentClassId",
                table: "Students");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Teacher",
                table: "Teacher");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Parent",
                table: "Parent");

            migrationBuilder.DropIndex(
                name: "IX_Parent_StudentId",
                table: "Parent");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassSubject",
                table: "ClassSubject");

            migrationBuilder.DropIndex(
                name: "IX_ClassSubject_SubjectTeacherId",
                table: "ClassSubject");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassRoom",
                table: "ClassRoom");

            migrationBuilder.DropColumn(
                name: "AdmissionNo",
                table: "Teacher");

            migrationBuilder.DropColumn(
                name: "CurrentClass",
                table: "Teacher");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Teacher");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "Parent");

            migrationBuilder.DropColumn(
                name: "SubjectTeacherId",
                table: "ClassSubject");

            migrationBuilder.RenameTable(
                name: "Teacher",
                newName: "Teachers");

            migrationBuilder.RenameTable(
                name: "Parent",
                newName: "Parents");

            migrationBuilder.RenameTable(
                name: "ClassSubject",
                newName: "ClassSubjects");

            migrationBuilder.RenameTable(
                name: "ClassRoom",
                newName: "ClassRooms");

            migrationBuilder.RenameIndex(
                name: "IX_ClassSubject_ClassRoomId",
                table: "ClassSubjects",
                newName: "IX_ClassSubjects_ClassRoomId");

            migrationBuilder.RenameIndex(
                name: "IX_ClassRoom_CurrentTeacherId",
                table: "ClassRooms",
                newName: "IX_ClassRooms_CurrentTeacherId");

            migrationBuilder.AddColumn<string>(
                name: "ClassSubjectId",
                table: "Teachers",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Parents",
                table: "Parents",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassSubjects",
                table: "ClassSubjects",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassRooms",
                table: "ClassRooms",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "ParentStudents",
                columns: table => new
                {
                    StudentId = table.Column<string>(nullable: false),
                    ParentId = table.Column<string>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParentStudents", x => new { x.StudentId, x.ParentId });
                    table.ForeignKey(
                        name: "FK_ParentStudents_Parents_ParentId",
                        column: x => x.ParentId,
                        principalTable: "Parents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ParentStudents_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teachers_ClassSubjectId",
                table: "Teachers",
                column: "ClassSubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_ParentStudents_ParentId",
                table: "ParentStudents",
                column: "ParentId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassRooms_Teachers_CurrentTeacherId",
                table: "ClassRooms",
                column: "CurrentTeacherId",
                principalTable: "Teachers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubjects_ClassRooms_ClassRoomId",
                table: "ClassSubjects",
                column: "ClassRoomId",
                principalTable: "ClassRooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_ClassRooms_CurrentClassId",
                table: "Students",
                column: "CurrentClassId",
                principalTable: "ClassRooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_ClassSubjects_ClassSubjectId",
                table: "Teachers",
                column: "ClassSubjectId",
                principalTable: "ClassSubjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassRooms_Teachers_CurrentTeacherId",
                table: "ClassRooms");

            migrationBuilder.DropForeignKey(
                name: "FK_ClassSubjects_ClassRooms_ClassRoomId",
                table: "ClassSubjects");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_ClassRooms_CurrentClassId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_ClassSubjects_ClassSubjectId",
                table: "Teachers");

            migrationBuilder.DropTable(
                name: "ParentStudents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers");

            migrationBuilder.DropIndex(
                name: "IX_Teachers_ClassSubjectId",
                table: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Parents",
                table: "Parents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassSubjects",
                table: "ClassSubjects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassRooms",
                table: "ClassRooms");

            migrationBuilder.DropColumn(
                name: "ClassSubjectId",
                table: "Teachers");

            migrationBuilder.RenameTable(
                name: "Teachers",
                newName: "Teacher");

            migrationBuilder.RenameTable(
                name: "Parents",
                newName: "Parent");

            migrationBuilder.RenameTable(
                name: "ClassSubjects",
                newName: "ClassSubject");

            migrationBuilder.RenameTable(
                name: "ClassRooms",
                newName: "ClassRoom");

            migrationBuilder.RenameIndex(
                name: "IX_ClassSubjects_ClassRoomId",
                table: "ClassSubject",
                newName: "IX_ClassSubject_ClassRoomId");

            migrationBuilder.RenameIndex(
                name: "IX_ClassRooms_CurrentTeacherId",
                table: "ClassRoom",
                newName: "IX_ClassRoom_CurrentTeacherId");

            migrationBuilder.AddColumn<string>(
                name: "AdmissionNo",
                table: "Teacher",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CurrentClass",
                table: "Teacher",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudentId",
                table: "Teacher",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StudentId",
                table: "Parent",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SubjectTeacherId",
                table: "ClassSubject",
                type: "text",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teacher",
                table: "Teacher",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Parent",
                table: "Parent",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassSubject",
                table: "ClassSubject",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassRoom",
                table: "ClassRoom",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Parent_StudentId",
                table: "Parent",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassSubject_SubjectTeacherId",
                table: "ClassSubject",
                column: "SubjectTeacherId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassRoom_Teacher_CurrentTeacherId",
                table: "ClassRoom",
                column: "CurrentTeacherId",
                principalTable: "Teacher",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubject_ClassRoom_ClassRoomId",
                table: "ClassSubject",
                column: "ClassRoomId",
                principalTable: "ClassRoom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ClassSubject_Teacher_SubjectTeacherId",
                table: "ClassSubject",
                column: "SubjectTeacherId",
                principalTable: "Teacher",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Parent_Students_StudentId",
                table: "Parent",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_ClassRoom_CurrentClassId",
                table: "Students",
                column: "CurrentClassId",
                principalTable: "ClassRoom",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
