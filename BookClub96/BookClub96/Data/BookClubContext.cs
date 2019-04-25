using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookClub96.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookClub96.Data
{
    public class BookClubContext : DbContext
    {
        public BookClubContext(DbContextOptions<BookClubContext> options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<Group> Groups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Group>()
                .HasData(new Group()
                    {
                        Id = 1,
                        MeetingTime = DateTime.UtcNow.AddDays(7),
                        Type = GroupType.Open
                    }
                );
        }
    }
}
