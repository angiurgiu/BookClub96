using System;
using System.Collections.Generic;

namespace BookClub96.Data.Entities
{
    public class Meeting
    {
        public int Id { get; set; }
        public Book Book { get; set; }
        public decimal Rating { get; set; }
        public string Attendees { get; set; }
        public string Host { get; set; }
        public string Address { get; set; }
        public DateTime Time { get; set; }
    }
}