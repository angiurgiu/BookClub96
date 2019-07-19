using System;
using System.Linq;
using BookClub96.Data;
using BookClub96.Models;
using BookClub96.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookClub96.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private BookClubContext _context;
        private IBookClubRepository _repository;

        public AppController(
            IMailService mailService, 
            BookClubContext context,
            IBookClubRepository repo)
        {
            _context = context;
            _mailService = mailService;
            _repository = repo;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";

            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                _mailService.SendMessage(
                    "angiurgiu@gmail.com", 
                    model.Subject, 
                    $"From: {model.Name} - {model.Email}", 
                    $"Message: {model.Message}");

                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About";

            return View();
        }

        [Authorize]
        public IActionResult Meetings()
        {
            return View();
        }

        public IActionResult Groups()
        {
            return View();
        }
    }
}