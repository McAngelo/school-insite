using System;
using System.Collections.Generic;

namespace api.Models
{
    public class ClassSubject
    {
        public string Id { get; set; }
        public string SubjectName { get; set; }
        public string SubjectCode { get; set; }
        public ICollection<Teacher> SubjectTeacher { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
