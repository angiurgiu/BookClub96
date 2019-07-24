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


    private errorMessage: string = "";
    public loadedUser: boolean = false;
    public loadedGroups: boolean = false;
    public groups: Group[] = [];
    GroupType = GroupType;

    ngOnInit(): void {
        this.data.loadCurrentUser().subscribe(success => {
            if (success) {
                this.loadedUser = true;
            }
        });

        this.data.loadGroups()
            .subscribe(success => {
                if (success) {
                    this.groups = this.data.groups;
                    this.loadedGroups = true;
                }
            });
    }

    isUserSignedIn(): boolean {
        if (this.data.currentUser) {
            return true;
        }

        return false;
    }

    joinGroup(group: Group) {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else if (this.canJoin(group)) {
            if (group.type === GroupType.ByApplication) {
                alert("Sending application request.");
            }
            else if (group.type === GroupType.Open) {

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
                alert("Already in group");
        }
        else if (group.type === GroupType.Closed) {
            alert("Group is closed.");
        }
        else if (group.type === GroupType.ByApplication) {
            alert("Need to send application request.");
        }
        else if (group.type === GroupType.Open) {
            return true;
        }

        return false;
    }

    leave(group: Group) {
        if (this.isMember(group)) {
            alert("Leaving group! Bye Felicia");
        }
    }

    isMember(group: Group) {
        if (!this.loadedGroups || !this.loadedUser) {
            return false;
        }

        var isMember = false;

        group.members.forEach((value, key) => {
            if (this.data.currentUser &&
                value.memberId === this.data.currentUser.id) {
                isMember = true;
            }
        });

        return isMember;
    }
}
