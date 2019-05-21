using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookClub96.Models
{
    public class MemberViewModel
    {
        public string MemberId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public string GoodreadsId { get; set; }

        public ICollection<GroupMemberViewModel> Memberships { get; set; }
        public ICollection<MeetingMemberViewModel> Attendances { get; set; }
    }
}
