using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using BookClub96.Data;
using BookClub96.Data.Entities;
using BookClub96.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookClub96.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class GroupsController : ControllerBase
    {
        private readonly BookClubContext _ctx;
        private readonly IBookClubRepository _repository;
        private readonly ILogger<BooksController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<Member> _userManager;

        public GroupsController(
            BookClubContext ctx,
            IBookClubRepository repository, 
            ILogger<BooksController> logger,
            IMapper mapper,
            UserManager<Member> userManager)
        {
            _ctx = ctx;
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get(bool includeMeetings = true, bool getAll = false)
        {
            try
            {
                IEnumerable<Group> results;
                if (getAll)
                {
                    results = _repository.GetAllGroups(includeMeetings);
                }
                else
                {
                    var user = User.Identity.Name;
                    results = _repository.GetAllGroupsOfUser(user, includeMeetings);
                }
                
                return Ok(_mapper.Map<IEnumerable<Group>, IEnumerable<GroupViewModel>>(results));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get groups. Exception={ex}");
                return BadRequest($"Failed to get groups. {ex.Message}");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var user = User.Identity.Name;
                var group = _repository.GetGroupById(id, user);

                if (group != null)
                {
                    return Ok(_mapper.Map<Group, GroupViewModel>(group));
                }

                return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get groups. Exception={ex}");
                return BadRequest($"Failed to get groups. {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]GroupViewModel group)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newGroup = _mapper.Map<GroupViewModel, Group>(group);

                    if (newGroup.CreationTime == DateTime.MinValue)
                    {
                        newGroup.CreationTime = DateTime.UtcNow;
                    }

                    var user = _repository.GetUser(User.Identity.Name);
                    var admin = new GroupMember()
                    {
                        Group = newGroup,
                        GroupId = newGroup.Id,
                        Member = user,
                        MemberId = user.Id,
                        IsAdmin = true
                    };
                    newGroup.Members = new List<GroupMember>() { admin };
                    user.Memberships.Add(admin);

                    _repository.AddEntity(newGroup);
                    if (_repository.SaveAll())
                    {
                        var vm = _mapper.Map<Group, GroupViewModel>(newGroup);

                        return Created($"api/groups/{vm.GroupId}", vm);
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save group. [ex={ex}]");

                throw;
            }

            return BadRequest("Failed to save new group.");
        }
    }
}
