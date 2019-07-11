import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var CreateMeeting = /** @class */ (function () {
    function CreateMeeting(data) {
        this.data = data;
    }
    CreateMeeting.prototype.createMeeting = function () {
        alert("creatingMeeting");
    };
    CreateMeeting = tslib_1.__decorate([
        Component({
            selector: "create-meeting",
            templateUrl: "createMeeting.component.html",
            styleUrls: ['createMeeting.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], CreateMeeting);
    return CreateMeeting;
}());
export { CreateMeeting };
//# sourceMappingURL=createMeeting.component.js.map