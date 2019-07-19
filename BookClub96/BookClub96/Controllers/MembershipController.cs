

using BookClub96.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BookClub96.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class MembershipController : Controller
    {
        private readonly UserManager<Member> _userManager;

        public MembershipController(
            UserManager<Member> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Route("currentUser")]
        public IActionResult Get()
        {
            if (User.Identity.IsAuthenticated)
            {
                return Ok(_userManager.GetUserAsync(User).Result);
            }

            return Ok();
        }

        [HttpGet]
        [Route("isSignedIn")]
        public IActionResult IsSignedIn()
        {
            return Ok(User.Identity.IsAuthenticated);
        }
    }
}
