using AutoMapper;
using BookClub96.Data.Entities;
using BookClub96.Models;

namespace BookClub96.Data
{
    public class BookClubMappingProfile : Profile
    {
        public BookClubMappingProfile()
        {
            // Group
            CreateMap<Group, GroupViewModel>()
                .ForMember(g => g.GroupId, ex => ex.MapFrom(g => g.Id))
                .ReverseMap();
            CreateMap<GroupType, GroupTypeViewModel>().ReverseMap();

            // Member
            CreateMap<Member, MemberViewModel>()
                .ForMember(m => m.MemberId, ex => ex.MapFrom(m => m.Id))
                .ReverseMap();

            CreateMap<GroupMember, GroupMemberViewModel>().ReverseMap();
            CreateMap<MeetingMember, MeetingMemberViewModel>().ReverseMap();

            // Meeting
            CreateMap<Meeting, MeetingViewModel>()
                .ForMember(m => m.MeetingId, ex => ex.MapFrom(m => m.Id))
                .ReverseMap();

            // Book
            CreateMap<Book, BookViewModel>()
                .ForMember(g => g.BookId, ex => ex.MapFrom(g => g.Id))
                .ReverseMap();
        }
    }
}
