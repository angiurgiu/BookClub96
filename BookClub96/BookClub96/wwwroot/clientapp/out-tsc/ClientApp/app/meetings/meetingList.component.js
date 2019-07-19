import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var MeetingList = /** @class */ (function () {
    function MeetingList(data) {
        this.data = data;
        this.meetings = [];
    }
    MeetingList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.meetings = _this.data.meetings;
            }
        });
    };
    MeetingList.prototype.editMeeting = function (meeting) {
        this.data.editMeeting(meeting);
    };
    MeetingList = tslib_1.__decorate([
        Component({
            selector: "meeting-list",
            templateUrl: "meetingList.component.html",
            styleUrls: ["meetingList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], MeetingList);
    return MeetingList;
}());
export { MeetingList };
//# sourceMappingURL=meetingList.component.js.map