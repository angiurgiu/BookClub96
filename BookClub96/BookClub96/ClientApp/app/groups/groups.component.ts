import { Component } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Group } from "../shared/group"
import { GroupType } from "../shared/group"
import { GroupMember } from "../shared/group"
import { Member } from "../shared/member"
import { Router } from "@angular/router"

@Component({
    selector: "groups",
    templateUrl: "groups.component.html"
})
export class Groups {
    constructor(private data: DataService, private router: Router) {
    }

    public myGroups: Group[] = [];
    public otherGroups: Group[] = [];

    private errorMessage: string = "";
    public isSignedIn: boolean = false;
    public isPartOfAnyGroup: boolean = false;
    public loadedUser: boolean = false;
    public loadedGroups: boolean = false;

    GroupType = GroupType;

    ngOnInit(): void {
        this.data.loadCurrentUser().subscribe(success => {
            if (success) {
                this.loadedUser = true;

                if (this.data.currentUser) {
                    this.isSignedIn = true;
                }

                this.data.loadGroups()
                    .subscribe(success => {
                        if (success) {
                            this.data.groups.forEach((value, key) => {
                                if (this.isMember(value)) {
                                    this.myGroups.push(value);
                                } else {
                                    this.otherGroups.push(value);
                                }
                            });
                            
                            if (this.isSignedIn && this.myGroups.length !== 0) {
                                this.isPartOfAnyGroup = true;
                            }

                            this.loadedGroups = true;
                        }
                    });
            }
        });
    }

    joinGroup(group: Group) {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        } else if (this.canJoin(group)) {
            if (group.type === GroupType.ByApplication) {
                alert("Sending application request.");
            } else if (group.type === GroupType.Open) {

                var groupMember = new GroupMember();
                groupMember.memberId = this.data.currentUser.id;
                groupMember.member = this.data.currentUser;
                groupMember.group = group;
                groupMember.groupId = group.groupId;
                groupMember.isAdmin = false;

                this.data.joinGroup(groupMember)
                    .subscribe(success => {
                            if (success) {
                                this.data.loadGroups();
                                this.router.navigate(['/'])
                                    .then(() => {
                                        window.location.reload();
                                    });
                            }
                        },
                        err => this.errorMessage = "Failed to join group.");
            }
        }
    }

    canJoin(group: Group) {
        if (this.isMember(group)) {
            return false;
        } else if (group.type === GroupType.Closed) {
            return false;
        } else if (group.type === GroupType.ByApplication) {
            return false;
        } else if (group.type === GroupType.Open) {
            return true;
        }

        return false;
    }

    leaveGroup(group: Group) {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        } else if (this.isMember(group)) {

            var groupMember = new GroupMember();
            groupMember.memberId = this.data.currentUser.id;
            groupMember.member = this.data.currentUser;
            groupMember.group = group;
            groupMember.groupId = group.groupId;

            this.data.leaveGroup(groupMember)
                .subscribe(success => {
                        if (success) {
                            this.data.loadGroups();
                            this.router.navigate(['/'])
                                .then(() => {
                                    window.location.reload();
                                });
                        }
                    },
                    err => this.errorMessage = "Failed to leave group.");
        }
    }

    isMember(group: Group) {
        if (!this.loadedUser) {
            return false;
        }

        var isMember = false;
        group.members.forEach((value, key) => {
            if (value.memberId === this.data.currentUser.id) {
                isMember = true;
            }
        });

        return isMember;
    }

    createGroup() {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        } else {
            this.router.navigate(["createGroup"]);
        }
    }
}
