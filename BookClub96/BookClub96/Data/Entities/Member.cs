using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BookClub96.Data.Entities
{
    public class Member : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public string GoodreadsId { get; set; }

        public ICollection<GroupMember> Memberships { get; set; }
        public ICollection<MeetingMember> Attendances { get; set; }
    }
}
