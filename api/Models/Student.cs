using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Student
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string OtherNames { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Gender { get; set; }
        public string AdmissionNo { get; set; }
        public string StudentId { get; set; }
        public DateTime DateOfBirth { get; set; }
         public ClassRoom CurrentClass { get; set; }
        public string Section { get; set; }
        public string Nationality { get; set; }
        public string Religion { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public ICollection<ParentStudents> Parents { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
