using BookClub96.Data;
using BookClub96.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BookClub96
{
    public class Startup
    {
        private IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<BookClubContext>(cfg =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("Club96ConnectionString"));
            });

            services.AddTransient<IMailService, MockMailService>();
            services.AddTransient<BookSeeder>();

            services.AddScoped<IBookClubRepository, BookClubRepository>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();
            app.UseNodeModules(env);

            app.UseMvc(cfg =>
            {
                cfg.MapRoute(
                    "Default",
                    "/{controller}/{action}/{id?}",
                    new {controller = "App", Action = "Index"});
            });
        }
    }
}
