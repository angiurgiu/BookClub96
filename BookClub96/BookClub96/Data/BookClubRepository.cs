using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookClub96.Data.Entities;

namespace BookClub96.Data
{
    public class BookClubRepository : IBookClubRepository
    {
        private readonly BookClubContext _ctx;

        public BookClubRepository(BookClubContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _ctx.Books
                .OrderBy(b => b.Title)
                .ToList();
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
