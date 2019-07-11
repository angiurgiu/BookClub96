import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Meeting } from "../shared/meeting"

@Component({
    selector: "meeting-list",
    templateUrl: "meetingList.component.html",
    styleUrls: ["meetingList.component.css"]
})
export class MeetingList implements OnInit {

    constructor(private data: DataService) {
    }

    public meetings: Meeting[] = [];

    ngOnInit(): void {
        this.data.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.meetings = this.data.meetings;
                }
            });
    }

    editMeeting(meeting: Meeting) {
        this.data.editMeeting(meeting);
    }
}