import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var BookList = /** @class */ (function () {
    function BookList(data) {
        this.data = data;
        this.meetings = [];
    }
    BookList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.meetings = _this.data.meetings;
            }
        });
    };
    BookList.prototype.editMeeting = function (meeting) {
        this.data.editMeeting(meeting);
    };
    BookList = tslib_1.__decorate([
        Component({
            selector: "meeting-list",
            templateUrl: "meetingList.component.html",
            styleUrls: ["meetingList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], BookList);
    return BookList;
}());
export { BookList };
//# sourceMappingURL=meetingList.component.js.map