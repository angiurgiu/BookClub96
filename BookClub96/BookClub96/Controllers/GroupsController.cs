using System;
using System.Collections.Generic;
using System.ComponentModel.Design.Data;
using System.Linq;
using AutoMapper;
using BookClub96.Data;
using BookClub96.Data.Entities;
using BookClub96.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookClub96.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class GroupsController : ControllerBase
    {
        private readonly IBookClubRepository _repository;
        private readonly ILogger<BooksController> _logger;
        private readonly IMapper _mapper;

        public GroupsController(
            IBookClubRepository repository, 
            ILogger<BooksController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Group>, IEnumerable<GroupViewModel>>(_repository.GetAllGroups()));
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
                var group = _repository.GetGroupById(id);

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
                _logger.LogError($"Failed to save order. [ex={ex}]");

                throw;
            }

            return BadRequest("Failed to save new order.");
        }
    }
}
