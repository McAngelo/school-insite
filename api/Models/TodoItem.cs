﻿using System;
namespace api.Models
{
    public class TodoItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}
