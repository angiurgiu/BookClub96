using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BookClub96.Data.Entities
{
    public class MeetingMember
    {
        public int MeetingId { get; set; }
        public string MemberId { get; set; }

        public Meeting Meeting { get; set; }
        public Member Member { get; set; }

        public bool IsHost { get; set; }
    }
}
