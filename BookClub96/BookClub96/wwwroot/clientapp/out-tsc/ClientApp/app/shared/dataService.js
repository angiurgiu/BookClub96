import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.meetings = [];
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
    DataService.prototype.editMeeting = function (meeting) {
        this.editedMeeting = meeting;
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map