using System;
using System.ComponentModel.DataAnnotations;

namespace contracts
{
    public class GuestResponse
    {
        [Required(ErrorMessage = "Please enter your name")]
        public string? Name { get; set; }

    }
}
