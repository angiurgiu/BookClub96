using System.ComponentModel.DataAnnotations.Schema;

namespace BookClub96.Data.Entities
{
    public class GroupMember
    {
        [ForeignKey("Group")]
        public int GroupId { get; set; }

        [ForeignKey("Member")]
        public string MemberId { get; set; }

        public Group Group { get; set; }
        public Member Member { get; set; }

        public bool IsAdmin { get; set; }
    }
}
