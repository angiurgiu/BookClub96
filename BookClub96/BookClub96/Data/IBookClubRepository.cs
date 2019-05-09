using System.Collections.Generic;
using BookClub96.Data.Entities;

namespace BookClub96.Data
{
    public interface IBookClubRepository
    {
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Group> GetAllGroups();
        void AddEntity(object entity);
        Group GetGroupById(int id);
        IEnumerable<Book> GetAllBooksByGenre(string genre);
        bool SaveAll();
    }
}