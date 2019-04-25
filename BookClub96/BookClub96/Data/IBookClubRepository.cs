using System.Collections.Generic;
using BookClub96.Data.Entities;

namespace BookClub96.Data
{
    public interface IBookClubRepository
    {
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Book> GetAllBooksByGenre(string genre);
        bool SaveAll();
    }
}