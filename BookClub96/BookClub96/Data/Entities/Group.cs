using System;
using System.Collections.Generic;

namespace BookClub96.Data.Entities
{
    public enum GroupType
    {
        Open, 
        Closed,
        ByApplication
    }
    public class Group
    {
        public int Id { get; set; }
        public DateTime MeetingTime { get; set; }
        public ICollection<Meeting> Meetings { get; set; }
        public GroupType Type { get; set; }
    }
}
