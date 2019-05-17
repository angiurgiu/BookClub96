using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BookClub96.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace BookClub96.Data
{
    public class BookSeeder
    {
        private readonly BookClubContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private UserManager<Member> _userManager;

        public BookSeeder(BookClubContext ctx, IHostingEnvironment hosting, UserManager<Member> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();
            var user = await _userManager.FindByEmailAsync("angiurgiu@gmail.com");
            if (user == null)
            {
                user = new Member()
                {
                    UserName = "andreito",
                    Email = "angiurgiu@gmail.com",
                    FirstName = "Andrei",
                    LastName = "Giurgiu",
                    Description = "Thirsty Nerd",
                    GoodreadsId = "18601222"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException($"Could not create new user. [result={result.Errors.FirstOrDefault()}]");
                }
            }

            if (!_ctx.Books.Any())
            {
                var filePath = Path.Combine(_hosting.ContentRootPath, "Data/library.json");
                var json = File.ReadAllText(filePath);

                var books = JsonConvert.DeserializeObject<IEnumerable<Book>>(json).ToList();
                _ctx.Books.AddRange(books);
                _ctx.Members.AddRange();

                var group = _ctx.Groups.FirstOrDefault(g => g.Id == 1);
                if (group != null)
                {
                    var groupMember = new GroupMember()
                    {
                        Member = user,
                        Group = group,
                        IsAdmin = true,
                        GroupId = group.Id,
                        MemberId = user.Id
                    };
                    user.GroupMembers = new List<GroupMember>() { groupMember };
                    group.Members = new List<GroupMember>() { groupMember };

                    var book = books.FirstOrDefault();
                    var meeting = new Meeting()
                    {
                        Book = book,
                        Address = "1050 Harwood",
                        Time = DateTime.UtcNow.AddDays(14),
                        GroupId = group.Id,
                    };
                    var meetingMember = new MeetingMember()
                    {
                        IsHost = true,
                        Meeting = meeting,
                        MeetingId = meeting.Id,
                        Member = user,
                        MemberId = user.Id
                    };
                    user.MeetingMembers = new List<MeetingMember>() { meetingMember };
                    meeting.Attendees = new List<MeetingMember>() { meetingMember };
                    group.Meetings = new List<Meeting> { meeting };
                }

                _ctx.SaveChanges();
            }
        }
    }
}
