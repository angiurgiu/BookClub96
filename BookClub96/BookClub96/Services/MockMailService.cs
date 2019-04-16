using Microsoft.Extensions.Logging;

namespace BookClub96.Services
{
    public class MockMailService : IMailService
    {
        private readonly ILogger _logger;

        public MockMailService(ILogger<MockMailService> logger)
        {
            _logger = logger;
        }

        public void SendMessage(string to, string subject, string from, string body)
        {
            // Log the message
            _logger.LogInformation($"To: {to} Subject: {subject} From: {from} Body: {body}");
        }
    }
}
