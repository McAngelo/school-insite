using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class PostgreSqlContext : DbContext
    {
        public PostgreSqlContext(DbContextOptions<PostgreSqlContext> options) : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<ClassRoom> ClassRooms { get; set; }
        public DbSet<ClassSubject> ClassSubjects { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ParentStudents>()
                .HasKey(t => new { t.StudentId, t.ParentId});
            
            builder.Entity<ParentStudents>()
                .HasOne(pt => pt.Student)
                .WithMany(p => p.Parents)
                .HasForeignKey(pt => pt.StudentId);
            
            builder.Entity<ParentStudents>()
                .HasOne(pt => pt.Parent)
                .WithMany(p => p.Students)
                .HasForeignKey(pt => pt.ParentId);

            base.OnModelCreating(builder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }
}
