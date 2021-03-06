﻿using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BookClub96.Data;
using BookClub96.Data.Entities;
using BookClub96.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BookClub96.Controllers
{
    [Route("/api/groups/{groupid}/meetings")]
    public class MeetingsController : Controller
    {
        private readonly IBookClubRepository _repository;
        private readonly ILogger<MeetingsController> _logger;
        private readonly IMapper _mapper;

        public MeetingsController(
            IBookClubRepository repository,
            ILogger<MeetingsController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int groupId)
        {
            var user = User.Identity.Name;
            var group = _repository.GetGroupById(groupId, user);
            if (group != null)
            {
                return Ok(_mapper.Map<IEnumerable<Meeting>, IEnumerable<MeetingViewModel>>(group.Meetings));
            }

            return NotFound();
        }

        [HttpGet]
        [Route("getAll")]
        public IActionResult GetAll(int groupId)
        {
            var user = User.Identity.Name;
            var groups = _repository.GetAllGroupsOfUser(user, includeMeetings: true);
            if (groups != null)
            {
                var meetings = groups.Select(g => g.Meetings).SelectMany(m => m);
                return Ok(_mapper.Map<IEnumerable<Meeting>, IEnumerable<MeetingViewModel>>(meetings));
            }

            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int groupId, int id)
        {
            var user = User.Identity.Name;
            var group = _repository.GetGroupById(groupId, user);
            var meeting = @group?.Meetings.FirstOrDefault(m => m.Id.Equals(id));

            if (meeting != null)
            {
                return Ok(_mapper.Map<Meeting, MeetingViewModel>(meeting));
            }

            return NotFound();
        }
    }
}
