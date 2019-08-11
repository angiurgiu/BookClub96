import { Component } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Group } from "../shared/group"
import { GroupType } from "../shared/group"
import { GroupMember } from "../shared/group"
import { Meeting } from "../shared/meeting"

import { Router } from "@angular/router"

@Component({
    selector: "createGroup",
    templateUrl: "createGroup.component.html"
})
export class CreateGroup {
    constructor(private data: DataService, private router: Router) {
    }

    private errorMessage: string = "";

    public areMembersDisabled = true;

    public group = {
        creationTime: new Date(),
        groupName: "",
        members: this.data.username,
        type: "Open"
    };

    GroupType = GroupType;

    public groupTypes = [
        { type: "Open", description: "Anyone can join" },
        { type: "ByApplication", description: "Admins will receive an aplication via email" },
        { type: "Closed", description: "Only admins can add members" }
    ];

    ngOnInit(): void {
    }

    onCreate(): void {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        } else {
            var newGroup = new Group();
            newGroup.groupId = 0;
            newGroup.creationTime = new Date();
            newGroup.meetings = new Array<Meeting>();
            newGroup.members = new Array<GroupMember>();
            newGroup.type = GroupType[this.group.type];
            newGroup.groupName = this.group.groupName;

            this.data.createGroup(newGroup)
                .subscribe(success => {
                        if (success) {
                            this.data.loadGroups();
                            this.router.navigate(['/'])
                                .then(() => {
                                    window.location.reload();
                                });
                        }
                    },
                    err => this.errorMessage = "Failed to create group.");
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}