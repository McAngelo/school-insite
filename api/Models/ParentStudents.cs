using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ParentStudents
    {
        public DateTime DateCreated { get; set;}
        public DateTime DateUpdated { get; set;}
        public string StudentId { get; set;}
        public Student Student { get; set;}
        public string ParentId { get; set; }
        public Parent Parent { get; set; }
    }
}