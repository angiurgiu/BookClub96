using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookClub96.Data.Entities;
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
    }
}
