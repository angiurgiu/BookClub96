import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { MeetingsComponent } from './app.component';
import { GroupsComponent } from './app.component';
import { MeetingList } from './meetings/meetingList.component'
import { Meetings } from './meetings/meetings.component'
import { Groups } from './groups/groups.component'
import { Login } from './login/login.component'
import { MeetingManager } from './meetings/meetingManager.component'
import { CreateMeeting } from './admin/createMeeting.component'
import { DataService } from './shared/dataService'

import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

let meetingRoutes = [
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
      GroupsComponent,
      CreateMeeting,
      Login
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(meetingRoutes,
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

let groupRoutes = [
    {
        path: "",
        component: Groups
    },
    {
        path: "login",
        component: Login
    }];

@NgModule({
    declarations: [
        GroupsComponent,
        Groups,
        Login,
        MeetingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(groupRoutes,
            {
                useHash: true,
                enableTracing: false // for debugging
            })
    ],
    providers: [
        DataService
    ],
    bootstrap: [GroupsComponent]
})
export class GroupsModule { }