import { Book } from "../shared/book"
import { Member } from "../shared/member"

export class Meeting {
    meetingId: number;
    book: Book;
    rating: string;
    address: string;
    groupId: string;
    time: Date;
    attendees: Array<Attendee> = new Array<Attendee>();
    host: Attendee;
}

export class Attendee {
    memberId: string;
    isHost: true;
    member: Member;
}