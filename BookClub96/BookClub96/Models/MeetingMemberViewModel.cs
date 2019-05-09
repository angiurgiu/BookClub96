namespace BookClub96.Models
{
    public class MeetingMemberViewModel
    {
        public int MeetingId { get; set; }
        public string MemberId { get; set; }

        public MeetingViewModel Meeting { get; set; }
        public MemberViewModel Member { get; set; }

        public bool IsHost { get; set; }
    }
}
