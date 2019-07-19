import { Component } from '@angular/core';

@Component({
    selector: "the-groups",
    templateUrl: "./app.component.html"
})
export class GroupsComponent {
    title = "Book Club 96 Groups";
}

@Component({
  selector: "the-meetings",
  templateUrl: "./app.component.html"
})
export class MeetingsComponent {
  title = "Book Club 96 Meetings";
}
