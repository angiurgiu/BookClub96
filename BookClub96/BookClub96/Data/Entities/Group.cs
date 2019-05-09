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
        public DateTime CreationTime { get; set; }
        public ICollection<Meeting> Meetings { get; set; }
        public GroupType Type { get; set; }
        public string GroupName { get; set; }
        public ICollection<GroupMember> Members { get; set; }
    }
}
