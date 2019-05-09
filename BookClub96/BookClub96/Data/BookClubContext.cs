using System;
using System.Collections.Generic;
using BookClub96.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BookClub96.Data
{
    public class BookClubContext : IdentityDbContext<Member>
    {
        public BookClubContext(DbContextOptions<BookClubContext> options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Member> Members { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MeetingMember>()
                .HasKey(x => new { x.MeetingId, x.MemberId });
            modelBuilder.Entity<GroupMember>()
                .HasKey(x => new { x.GroupId, x.MemberId });

            var group = new Group()
            {
                Id = 1,
                CreationTime = DateTime.UtcNow,
                Type = GroupType.Open,
                GroupName = "Thirsty Nerds",
                Members = new List<GroupMember>(),
                Meetings = new List<Meeting>()
            };
            modelBuilder.Entity<Group>().HasData(group);
        }
    }
}
