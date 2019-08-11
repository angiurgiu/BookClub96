import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { GroupType } from "../shared/group";
import { GroupMember } from "../shared/group";
import { Router } from "@angular/router";
var Groups = /** @class */ (function () {
    function Groups(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.isSignedIn = false;
        this.isPartOfAnyGroup = false;
        this.loadedUser = false;
        this.loadedGroups = false;
        this.groups = [];
        this.GroupType = GroupType;
    }
    Groups.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCurrentUser().subscribe(function (success) {
            if (success) {
                _this.loadedUser = true;
                if (_this.data.currentUser) {
                    _this.isSignedIn = true;
                }
                if (_this.isMemberOfAnyGroup()) {
                    _this.isPartOfAnyGroup = true;
                }
            }
        });
        this.data.loadGroups()
            .subscribe(function (success) {
            if (success) {
                _this.groups = _this.data.groups;
                _this.loadedGroups = true;
                if (_this.isMemberOfAnyGroup()) {
                    _this.isPartOfAnyGroup = true;
                }
            }
        });
    };
    Groups.prototype.joinGroup = function (group) {
        var _this = this;
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else if (this.canJoin(group)) {
            if (group.type === GroupType.ByApplication) {
                alert("Sending application request.");
            }
            else if (group.type === GroupType.Open) {
                var groupMember = new GroupMember();
                groupMember.memberId = this.data.currentUser.id;
                groupMember.member = this.data.currentUser;
                groupMember.group = group;
                groupMember.groupId = group.groupId;
                groupMember.isAdmin = false;
                this.data.joinGroup(groupMember)
                    .subscribe(function (success) {
                    if (success) {
                        _this.data.loadGroups();
                        _this.router.navigate(['/'])
                            .then(function () {
                            window.location.reload();
                        });
                    }
                }, function (err) { return _this.errorMessage = "Failed to join group."; });
            }
        }
    };
    Groups.prototype.canJoin = function (group) {
        if (this.isMember(group)) {
            alert("Already in group");
        }
        else if (group.type === GroupType.Closed) {
            alert("Group is closed.");
        }
        else if (group.type === GroupType.ByApplication) {
            alert("Need to send application request.");
        }
        else if (group.type === GroupType.Open) {
            return true;
        }
        return false;
    };
    Groups.prototype.isMemberOfAnyGroup = function () {
        if (!this.isSignedIn || !this.loadedGroups) {
            return false;
        }
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (this.isMember(group)) {
                return true;
            }
        }
        return false;
    };
    Groups.prototype.leaveGroup = function (group) {
        var _this = this;
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else if (this.isMember(group)) {
            var groupMember = new GroupMember();
            groupMember.memberId = this.data.currentUser.id;
            groupMember.member = this.data.currentUser;
            groupMember.group = group;
            groupMember.groupId = group.groupId;
            this.data.leaveGroup(groupMember)
                .subscribe(function (success) {
                if (success) {
                    _this.data.loadGroups();
                    _this.router.navigate(['/'])
                        .then(function () {
                        window.location.reload();
                    });
                }
            }, function (err) { return _this.errorMessage = "Failed to leave group."; });
        }
    };
    Groups.prototype.isMember = function (group) {
        var _this = this;
        if (!this.loadedGroups || !this.loadedUser) {
            return false;
        }
        var isMember = false;
        group.members.forEach(function (value, key) {
            if (_this.data.currentUser &&
                value.memberId === _this.data.currentUser.id) {
                isMember = true;
            }
        });
        return isMember;
    };
    Groups.prototype.createGroup = function (group) {
        this.router.navigate(["create-group"]);
    };
    Groups = tslib_1.__decorate([
        Component({
            selector: "groups",
            templateUrl: "groups.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Groups);
    return Groups;
}());
export { Groups };
//# sourceMappingURL=groups.component.js.map