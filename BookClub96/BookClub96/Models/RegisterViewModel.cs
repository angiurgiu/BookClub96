using System.ComponentModel.DataAnnotations;

namespace BookClub96.Models
{
    public class RegisterViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string ConfirmPassword { get; set; }

        public string LastName { get; set; }
        public string Description { get; set; }
        public string GoodreadsId { get; set; }
        public byte[] Photo { get; set; }
    }
}

