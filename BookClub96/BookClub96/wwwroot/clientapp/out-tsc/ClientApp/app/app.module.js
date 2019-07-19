import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MeetingsComponent } from './app.component';
import { GroupsComponent } from './app.component';
import { MeetingList } from './meetings/meetingList.component';
import { Meetings } from './meetings/meetings.component';
import { Groups } from './groups/groups.component';
import { Login } from './login/login.component';
import { MeetingManager } from './meetings/meetingManager.component';
import { CreateMeeting } from './admin/createMeeting.component';
import { DataService } from './shared/dataService';
import { RouterModule } from '@angular/router';
var meetingRoutes = [
    {
        path: "",
        component: Meetings
    },
    {
        path: "admin/createmeeting",
        component: CreateMeeting
    }
];
var MeetingsModule = /** @class */ (function () {
    function MeetingsModule() {
    }
    MeetingsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                MeetingsComponent,
                MeetingList,
                MeetingManager,
                Meetings,
                CreateMeeting,
                Login
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                RouterModule.forRoot(meetingRoutes, {
                    useHash: true,
                    enableTracing: false // for debugging
                })
            ],
            providers: [
                DataService
            ],
            bootstrap: [MeetingsComponent]
        })
    ], MeetingsModule);
    return MeetingsModule;
}());
export { MeetingsModule };
var groupRoutes = [
    {
        path: "",
        component: Groups
    },
    {
        path: "login",
        component: Login
    }
];
var GroupsModule = /** @class */ (function () {
    function GroupsModule() {
    }
    GroupsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                GroupsComponent,
                Groups,
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                RouterModule.forRoot(groupRoutes, {
                    useHash: true,
                    enableTracing: false // for debugging
                })
            ],
            providers: [
                DataService
            ],
            bootstrap: [GroupsComponent]
        })
    ], GroupsModule);
    return GroupsModule;
}());
export { GroupsModule };
//# sourceMappingURL=app.module.js.map