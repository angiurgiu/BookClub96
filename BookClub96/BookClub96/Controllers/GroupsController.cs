﻿using System;
using System.Collections.Generic;
using AutoMapper;
using BookClub96.Data;
using BookClub96.Data.Entities;
using BookClub96.Models;
using Microsoft.AspNetCore.Authentication;
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
        public IActionResult Get(bool includeMeetings = true)
        {
            try
            {
                var user = User.Identity.Name;
                var results = _repository.GetAllGroupsOfUser(user, includeMeetings);

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
