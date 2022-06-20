using System;
using System.Collections.Generic;

namespace api.Models
{
    public class ClassRoom
    {
        public string Id { get; set; }
        public string ClassName { get; set; }
        public string ClassCode { get; set; }
        public ICollection<ClassSubject> Subjects { get; set; }
        public Teacher CurrentTeacher { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
    }
}
