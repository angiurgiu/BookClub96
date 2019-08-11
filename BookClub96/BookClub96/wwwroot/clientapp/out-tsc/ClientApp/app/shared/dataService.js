import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.meetings = [];
        this.groups = [];
        this.books = [];
    }
    DataService.prototype.loadBooks = function () {
        var _this = this;
        return this.http.get("/api/books")
            .pipe((map(function (data) {
            _this.books = data;
            return true;
        })));
    };
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/groups/0/meetings/getAll")
            .pipe((map(function (data) {
            _this.meetings = data;
            return true;
        })));
    };
    DataService.prototype.loadGroups = function () {
        var _this = this;
        return this.http.get("/api/groups?includeMeetings=true&getAll=true")
            .pipe((map(function (data) {
            _this.groups = data;
            return true;
        })));
    };
    DataService.prototype.loadCurrentUser = function () {
        var _this = this;
        return this.http.get("/api/membership/currentUser")
            .pipe((map(function (data) {
            _this.currentUser = data;
            return true;
        })));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe((map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        })));
    };
    DataService.prototype.editMeeting = function (meeting) {
        this.editedMeeting = meeting;
    };
    DataService.prototype.createMeeting = function () {
    };
    DataService.prototype.saveMeeting = function () {
    };
    DataService.prototype.joinGroup = function (groupMember) {
        return this.http.post("/api/groupmembers", groupMember, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe((map(function (data) {
            return true;
        })));
    };
    DataService.prototype.leaveGroup = function (groupMember) {
        return this.http.post("/api/groupmembers/remove", groupMember, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
        })
            .pipe((map(function (data) {
            return true;
        })));
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map