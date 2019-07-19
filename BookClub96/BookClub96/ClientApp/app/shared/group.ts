import { Member } from "../shared/member"
import { Meeting } from "../shared/meeting"

export class Group {
    groupId: number;
    creationTime: Date;
    meetings: Array<Meeting> = new Array<Meeting>();
    members: Array<GroupMember> = new Array<GroupMember>();
    type: GroupType;
    groupName: string;
}

export enum GroupType {
    Open,
    Closed,
    ByApplication
}

export class GroupMember {
    isAdmin: boolean;
    memberId: string;
    member: Member;
}
