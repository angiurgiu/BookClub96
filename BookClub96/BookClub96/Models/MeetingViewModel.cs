using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookClub96.Models
{
    public class MeetingViewModel
    {
        public int MeetingId { get; set; }
        public BookViewModel Book { get; set; }
        public decimal Rating { get; set; }
        public ICollection<MeetingMemberViewModel> Attendees { get; set; }
        public string Address { get; set; }
        public int GroupId { get; set; }

        [Required]
        public DateTime Time { get; set; }
    }
}
