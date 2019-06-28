import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";

@Component(
{
    selector: "meeting-manager",
    templateUrl: "meetingManager.component.html",
    styleUrls: []
})
export class MeetingManager
{
    constructor(private data: DataService) {}
}
