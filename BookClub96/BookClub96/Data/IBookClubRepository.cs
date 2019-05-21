using System.Collections.Generic;
using BookClub96.Data.Entities;

namespace BookClub96.Data
{
    public interface IBookClubRepository
    {
        Member GetUser(string username);
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Group> GetAllGroups();
        void AddEntity(object entity);
        Group GetGroupById(int id, string user);
        IEnumerable<Book> GetAllBooksByGenre(string genre);
        IEnumerable<Group> GetAllGroupsOfUser(string user, bool includeMeetings);
        bool SaveAll();
    }
}