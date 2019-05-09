using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookClub96.Models
{
    public class BookViewModel
    {
        public int BookId { get; set; }
        public string GoodreadsId { get; set; }
        public string GoodreadsLink { get; set; }
        public string CoverLink { get; set; }
        public string ShoppingLink { get; set; }
        public string Genre { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Author { get; set; }
    }
}
