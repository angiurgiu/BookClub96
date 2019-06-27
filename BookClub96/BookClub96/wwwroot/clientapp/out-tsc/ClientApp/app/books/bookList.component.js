import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var BookList = /** @class */ (function () {
    function BookList(data) {
        this.data = data;
        this.books = [];
    }
    BookList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.books = _this.data.books;
            }
        });
    };
    BookList = tslib_1.__decorate([
        Component({
            selector: "book-list",
            templateUrl: "bookList.component.html",
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], BookList);
    return BookList;
}());
export { BookList };
//# sourceMappingURL=bookList.component.js.map