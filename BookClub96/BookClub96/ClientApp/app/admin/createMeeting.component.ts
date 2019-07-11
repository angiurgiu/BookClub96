import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";

@Component(
{
    selector: "create-meeting",
    templateUrl: "createMeeting.component.html",
        styleUrls: ['createMeeting.component.css']
})
export class CreateMeeting
{
    constructor(private data: DataService) { }

    createMeeting() {
        alert("creatingMeeting");
    }
}