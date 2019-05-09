using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookClub96.Models
{
    public class GroupViewModel
    {
        public int GroupId { get; set; }
        public DateTime CreationTime { get; set; }
        public ICollection<MeetingViewModel> Meetings { get; set; }
        public ICollection<GroupMemberViewModel> Members { get; set; }
        public GroupTypeViewModel Type { get; set; }

        [Required]
        [MinLength(5)]
        public string GroupName { get; set; }
    }
}
