import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { GroupsComponent } from './groupsapp.component';
import { Groups } from './groups/groups.component';
import { DataService } from './shared/dataService';
import { RouterModule } from '@angular/router';
var groupRoutes = [
    {
        path: "",
        component: Groups
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
//# sourceMappingURL=groupsapp.module.js.map