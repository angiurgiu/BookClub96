import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { GroupType } from "../shared/group";
import { Router } from "@angular/router";
var CreateGroup = /** @class */ (function () {
    function CreateGroup(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.group = {
            name: "",
            type: GroupType.Open
        };
        this.GroupType = GroupType;
    }
    CreateGroup.prototype.ngOnInit = function () {
    };
    CreateGroup.prototype.onCreate = function () {
    };
    CreateGroup = tslib_1.__decorate([
        Component({
            selector: "create-group",
            templateUrl: "createGroup.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], CreateGroup);
    return CreateGroup;
}());
export { CreateGroup };
//# sourceMappingURL=createGroup.component.js.map