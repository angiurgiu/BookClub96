using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BookClub96.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace BookClub96.Data
{
    public class BookSeeder
    {
        private readonly BookClubContext _ctx;
        private readonly IHostingEnvironment _hosting;

        public BookSeeder(BookClubContext ctx, IHostingEnvironment hosting)
        {
            _ctx = ctx;
            _hosting = hosting;
        }

        public void Seed()
        {
            _ctx.Database.EnsureCreated();
            if (!_ctx.Books.Any())
            {
                var filePath = Path.Combine(_hosting.ContentRootPath, "Data/library.json");
                var json = File.ReadAllText(filePath);

                var books = JsonConvert.DeserializeObject<IEnumerable<Book>>(json).ToList();
                _ctx.Books.AddRange(books);

                var group = _ctx.Groups.FirstOrDefault(g => g.Id == 1);
                if (group != null)
                {
                    var meeting = new Meeting()
                    {
                        Book = books.FirstOrDefault(),
                        Attendees = "Andrei Vince Jason",
                        Host = "Andrei",
                        Address = "1050 Harwood",
                        Time = DateTime.UtcNow.AddDays(14)
                    };
                    group.Meetings = new List<Meeting> {meeting};
                }

                _ctx.SaveChanges();
            }
        }
    }
}
