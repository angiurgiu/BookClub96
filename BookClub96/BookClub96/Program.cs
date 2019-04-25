using BookClub96.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BookClub96
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            RunSeeding(host);

            host.Run();
        }

        private static void RunSeeding(IWebHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();

            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<BookSeeder>();
                seeder.Seed();
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(StartupConfiguration)
                .UseStartup<Startup>();

        private static void StartupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            // Removing the default configuration
            builder.Sources.Clear();

            builder.AddJsonFile("config.json", false, reloadOnChange: true)
                .AddEnvironmentVariables();
        }
    }
}
