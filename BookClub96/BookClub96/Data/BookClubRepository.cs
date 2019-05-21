using System;
using System.Collections.Generic;
using System.Linq;
using BookClub96.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace BookClub96.Data
{
    public class BookClubRepository : IBookClubRepository
    {
        private readonly BookClubContext _ctx;
        private ILogger<BookClubRepository> _logger;

        public BookClubRepository(BookClubContext ctx, ILogger<BookClubRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public Member GetUser(string username)
        {
            return _ctx.Members
                .Include(m => m.Attendances)
                .Include(m => m.Memberships)
                .FirstOrDefault(m => m.UserName.Equals(username));
        }

        public IEnumerable<Book> GetAllBooks()
        {
            try
            {
                _logger.LogInformation($"{nameof(GetAllBooks)} was called.");

                return _ctx.Books
                    .OrderBy(b => b.Title)
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all books. [ex={ex}]");
                return null;
            }
        }

        public IEnumerable<Group> GetAllGroups()
        {
            return _ctx.Groups
                .Include(g => g.Meetings)
                .ThenInclude(m => m.Book)
                .ToList();
        }

        public void AddEntity(object entity)
        {
            _ctx.Add(entity);
        }

        public Group GetGroupById(int id, string user)
        {
            return _ctx.Groups
                .Include(g => g.Members).ThenInclude(m => m.Member)
                .Include(g => g.Meetings).ThenInclude(m => m.Book)
                .Include(g => g.Meetings).ThenInclude(m => m.Attendees)
                .FirstOrDefault(g => g.Id == id && g.Members.Any(gm => gm.Member.UserName.Equals(user)));
        }

        public IEnumerable<Book> GetAllBooksByGenre(string genre)
        {
            return _ctx.Books
                .OrderBy(b => b.Genre == genre)
                .ToList();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }

        public IEnumerable<Group> GetAllGroupsOfUser(string user, bool includeMeetings = true)
        {
            if (includeMeetings)
            {
                return _ctx.Groups
                    .Where(g => g.Members.Any(m => m.Member.UserName.Equals(user)))
                    .Include(g => g.Members)
                    .ThenInclude(gm => gm.Member)
                    .Include(g => g.Meetings)
                    .ThenInclude(m => m.Book)
                    .ToList();
            }
            else
            {
                return _ctx.Groups
                    .Where(g => g.Members.Any(m => m.Member.UserName.Equals(user)))
                    .Include(g => g.Members)
                    .ThenInclude(gm => gm.Member)
                    .ToList();
            }
        }
    }
}
