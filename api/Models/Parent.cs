using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Parent
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string OtherNames { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Gender { get; set; }
        public string Occupation { get; set; }
        public string Nationality { get; set; }
        public string Address { get; set; }
        public ICollection<ParentStudents> Students {get; set;}
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
