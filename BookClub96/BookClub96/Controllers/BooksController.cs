using System;
using BookClub96.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookClub96.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class BooksController : ControllerBase
    {
        private readonly IBookClubRepository _repository;
        private readonly ILogger<BooksController> _logger;

        public BooksController(IBookClubRepository repository, ILogger<BooksController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.GetAllBooks());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get books. Exception={ex}");
                return BadRequest($"Failed to get books. {ex.Message}");
            }
        }
    }
}
