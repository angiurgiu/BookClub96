using System;
using System.Collections.Generic;
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
    public class GroupMembersController : ControllerBase
    {
        private readonly BookClubContext _ctx;
        private readonly IBookClubRepository _repository;
        private readonly ILogger<BooksController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<Member> _userManager;

        public GroupMembersController(
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

        [HttpPost]
        public IActionResult Post([FromBody] GroupMemberViewModel groupMemberViewModel)
        {
            try
            {
                var group = _repository.GetGroupById(groupMemberViewModel.GroupId);
                if (group == null)
                {
                    return BadRequest($"Group does not exist. [id={groupMemberViewModel.GroupId}]");
                }

                var user = _repository.GetUser(groupMemberViewModel.Member.UserName);
                if (user == null)
                {
                    return BadRequest($"User not found. [user={groupMemberViewModel.Member.UserName}]");
                }

                foreach (var member in group.Members)
                {
                    if (member.MemberId.Equals(user.Id))
                    {
                        return BadRequest($"User already in group. [user={user.Id}]");
                    }
                }

                var groupMember = _mapper.Map<GroupMemberViewModel, GroupMember>(groupMemberViewModel);

                group.Members.Add(groupMember);
                user.Memberships.Add(groupMember);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save group membership changes. [ex={ex}]");

                throw;
            }

            return BadRequest("Failed to save group membership changes.");
        }
    }
}
