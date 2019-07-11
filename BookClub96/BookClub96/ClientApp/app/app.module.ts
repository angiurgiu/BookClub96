import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { MeetingsComponent } from './app.component';
import { MeetingList } from './books/meetingList.component'
import { Meetings } from './books/meetings.component'
import { MeetingManager } from './books/meetingManager.component'
import { CreateMeeting } from './admin/createMeeting.component'
import { DataService } from './shared/dataService'

import { RouterModule } from '@angular/router'

let routes = [
    {
        path: "",
        component: Meetings
    },
    {
        path: "admin/createmeeting",
        component: CreateMeeting
    }];

@NgModule({
  declarations: [
      MeetingsComponent,
      MeetingList,
      MeetingManager,
      Meetings,
      CreateMeeting
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes,
          {
              useHash: true,
              enableTracing: false // for debugging
          })
  ],
    providers: [
    DataService
  ],
    bootstrap: [MeetingsComponent]
})
export class MeetingsModule { }
