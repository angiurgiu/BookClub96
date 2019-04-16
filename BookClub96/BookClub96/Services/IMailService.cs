namespace BookClub96.Services
{
    public interface IMailService
    {
        void SendMessage(string to, string subject, string from, string body);
    }
}