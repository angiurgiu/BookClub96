import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var MeetingManager = /** @class */ (function () {
    function MeetingManager(data) {
        this.data = data;
    }
    MeetingManager.prototype.createMeeting = function () {
        this.data.createMeeting();
    };
    MeetingManager.prototype.saveMeeting = function () {
        this.data.saveMeeting();
    };
    MeetingManager = tslib_1.__decorate([
        Component({
            selector: "meeting-manager",
            templateUrl: "meetingManager.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], MeetingManager);
    return MeetingManager;
}());
export { MeetingManager };
//# sourceMappingURL=meetingManager.component.js.map