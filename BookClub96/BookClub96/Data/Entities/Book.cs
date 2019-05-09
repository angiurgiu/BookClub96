using System.ComponentModel.DataAnnotations.Schema;

namespace BookClub96.Data.Entities
{
  public class Book
  {
    public int Id { get; set; }
    public string GoodreadsId { get; set; }
    public string GoodreadsLink { get; set; }
    public string CoverLink { get; set; }
    public string ShoppingLink { get; set; }
    public string Genre { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Author { get; set; }
  }
}
