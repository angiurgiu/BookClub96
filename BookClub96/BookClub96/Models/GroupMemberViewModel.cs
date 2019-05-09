namespace BookClub96.Models
{
    public class GroupMemberViewModel
    {
        public int GroupId { get; set; }
        public string MemberId { get; set; }

        public GroupViewModel Group { get; set; }
        public MemberViewModel Member { get; set; }

        public bool IsAdmin { get; set; }
    }
}
