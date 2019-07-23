import { Component } from '@angular/core';

@Component({
    selector: "the-groups",
    templateUrl: "./groups.component.html"
})
export class GroupsComponent {
    title = "Book Club 96 Groups";
}

@Component({
  selector: "the-meetings",
  templateUrl: "./meetings.component.html"
})
export class MeetingsComponent {
  title = "Book Club 96 Meetings";
}
