(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./app/admin/createMeeting.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/admin/createMeeting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light p-1 m-1\">\r\n\r\n    <h3>Create Meeting</h3>\r\n    <div><strong>Book</strong>: </div>\r\n    <div><strong>Meeting time</strong>: </div>\r\n    <div><strong>Address</strong>: </div>\r\n\r\n    <strong>Host: </strong>\r\n\r\n    <strong>Attendees:</strong>\r\n\r\n    <button id=\"createButton\" class=\"btn btn-success\" (click)=\"createMeeting()\">Create</button>\r\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/app.component.html":
/*!***********************************************************!*\
  !*** ../node_modules/raw-loader!./app/app.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/books/meetingList.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/books/meetingList.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"book-info col-md-12\" *ngFor=\"let m of meetings\">\r\n        <div class=\"card bg-transparent p-1 m-1\">\r\n            <div class=\"row\">\r\n                <div class=\"book-info col-md-5\">\r\n                    <div class=\"card bg-light p-1 m-1\">\r\n                        <img src=\"/img/{{m.book.bookId}}.jpg\" class=\"img-fluid\" [alt]=\"m.book.title\" />\r\n                        <div class=\"book-name\">{{ m.book.title }}</div>\r\n                        <ul class=\"book-props\">\r\n                            <li><strong>Author</strong>: {{m.book.author}}</li>\r\n                            <li><strong>Title</strong>: {{m.book.title}}</li>\r\n                            <li><strong>Genre</strong>: {{m.book.genre}}</li>\r\n                        </ul>\r\n                        <button id=\"editButton\" class=\"btn btn-success\" (click)=\"editMeeting(m)\">Edit</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"book-info col-md-7\">\r\n                    <ul class=\"book-props\">\r\n                        <li><strong>Address</strong>: {{m.address}}</li>\r\n                        <li><strong>Time</strong>: {{m.time}}</li>\r\n                        <div *ngFor=\"let attendee of m.attendees\">\r\n                            <div *ngIf=\"attendee.isHost\"><strong>Host</strong>: {{ attendee.member.userName }}</div>\r\n                        </div>\r\n                        <strong>Attendees:</strong>\r\n                        <ul *ngFor=\"let attendee of m.attendees\">\r\n                            <li>{{attendee.member.userName}}</li>\r\n                        </ul>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/books/meetingManager.component.html":
/*!****************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/books/meetingManager.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light p-1 m-1\">\r\n    <div *ngIf=\"data.editedMeeting; then thenBlock else elseBlock\"></div>\r\n    <ng-template #thenBlock>\r\n        <h3>Edit Meeting</h3>\r\n        <div><strong>Book</strong>: {{ data.editedMeeting.book.title }}</div>\r\n        <div><strong>Meeting time</strong>: {{ data.editedMeeting.time }}</div>\r\n        <div><strong>Address</strong>: {{ data.editedMeeting.address }}</div>\r\n\r\n        <strong>Host: </strong>\r\n        <select *ngFor=\"let attendee of data.editedMeeting.attendees\">\r\n            <div *ngIf=\"attendee.isHost; then thenBlock else elseBlock\"></div>\r\n            <ng-template #thenBlock>\r\n                <option value=\"{{ attendee.member.userName }}\" selected=\"selected\">{{ attendee.member.userName }}</option>\r\n            </ng-template>\r\n            <ng-template #elseBlock>\r\n                <option value=\"{{ attendee.member.userName }}\">{{ attendee.member.userName }}</option>\r\n            </ng-template>\r\n        </select>\r\n\r\n        <strong>Attendees:</strong>\r\n        <ul *ngFor=\"let attendee of data.editedMeeting.attendees\">\r\n            <li>{{attendee.member.userName}}</li>\r\n        </ul>\r\n        <button id=\"editButton\" class=\"btn btn-success\" (click)=\"saveMeeting()\">Save</button>\r\n    </ng-template>\r\n    <ng-template #elseBlock>\r\n        <img src=\"https://knowledgequest.aasl.org/wp-content/uploads/2015/01/books.png\"/>\r\n        <a routerLink=\"/admin/createmeeting\" class=\"btn btn-success\">Create new meeting</a>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/books/meetings.component.html":
/*!**********************************************************************!*\
  !*** ../node_modules/raw-loader!./app/books/meetings.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <meeting-list></meeting-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <meeting-manager></meeting-manager>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/admin/createMeeting.component.css":
/*!***********************************************!*\
  !*** ./app/admin/createMeeting.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-info img {\r\n    max-width: 120px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.book-info .book-name {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY3JlYXRlTWVldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FkbWluL2NyZWF0ZU1lZXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWluZm8gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLmJvb2staW5mbyAuYm9vay1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./app/admin/createMeeting.component.ts":
/*!**********************************************!*\
  !*** ./app/admin/createMeeting.component.ts ***!
  \**********************************************/
/*! exports provided: CreateMeeting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMeeting", function() { return CreateMeeting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



var CreateMeeting = /** @class */ (function () {
    function CreateMeeting(data) {
        this.data = data;
    }
    CreateMeeting.prototype.createMeeting = function () {
        alert("creatingMeeting");
    };
    CreateMeeting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "create-meeting",
            template: __webpack_require__(/*! raw-loader!./createMeeting.component.html */ "../node_modules/raw-loader/index.js!./app/admin/createMeeting.component.html"),
            styles: [__webpack_require__(/*! ./createMeeting.component.css */ "./app/admin/createMeeting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CreateMeeting);
    return CreateMeeting;
}());



/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: MeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function() { return MeetingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var MeetingsComponent = /** @class */ (function () {
    function MeetingsComponent() {
        this.title = "Book Club 96";
    }
    MeetingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-meetings",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./app/app.component.html")
        })
    ], MeetingsComponent);
    return MeetingsComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: MeetingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsModule", function() { return MeetingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _books_meetingList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books/meetingList.component */ "./app/books/meetingList.component.ts");
/* harmony import */ var _books_meetings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/meetings.component */ "./app/books/meetings.component.ts");
/* harmony import */ var _books_meetingManager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books/meetingManager.component */ "./app/books/meetingManager.component.ts");
/* harmony import */ var _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/createMeeting.component */ "./app/admin/createMeeting.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");











var routes = [
    {
        path: "",
        component: _books_meetings_component__WEBPACK_IMPORTED_MODULE_6__["Meetings"]
    },
    {
        path: "admin/createmeeting",
        component: _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_8__["CreateMeeting"]
    }
];
var MeetingsModule = /** @class */ (function () {
    function MeetingsModule() {
    }
    MeetingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsComponent"],
                _books_meetingList_component__WEBPACK_IMPORTED_MODULE_5__["MeetingList"],
                _books_meetingManager_component__WEBPACK_IMPORTED_MODULE_7__["MeetingManager"],
                _books_meetings_component__WEBPACK_IMPORTED_MODULE_6__["Meetings"],
                _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_8__["CreateMeeting"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for debugging
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_9__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsComponent"]]
        })
    ], MeetingsModule);
    return MeetingsModule;
}());



/***/ }),

/***/ "./app/books/meetingList.component.css":
/*!*********************************************!*\
  !*** ./app/books/meetingList.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-info img {\r\n    max-width: 120px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.book-info .book-name {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYm9va3MvbWVldGluZ0xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9ib29rcy9tZWV0aW5nTGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2staW5mbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uYm9vay1pbmZvIC5ib29rLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/books/meetingList.component.ts":
/*!********************************************!*\
  !*** ./app/books/meetingList.component.ts ***!
  \********************************************/
/*! exports provided: MeetingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingList", function() { return MeetingList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



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
    MeetingList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "meeting-list",
            template: __webpack_require__(/*! raw-loader!./meetingList.component.html */ "../node_modules/raw-loader/index.js!./app/books/meetingList.component.html"),
            styles: [__webpack_require__(/*! ./meetingList.component.css */ "./app/books/meetingList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MeetingList);
    return MeetingList;
}());



/***/ }),

/***/ "./app/books/meetingManager.component.ts":
/*!***********************************************!*\
  !*** ./app/books/meetingManager.component.ts ***!
  \***********************************************/
/*! exports provided: MeetingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingManager", function() { return MeetingManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



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
    MeetingManager = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "meeting-manager",
            template: __webpack_require__(/*! raw-loader!./meetingManager.component.html */ "../node_modules/raw-loader/index.js!./app/books/meetingManager.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MeetingManager);
    return MeetingManager;
}());



/***/ }),

/***/ "./app/books/meetings.component.ts":
/*!*****************************************!*\
  !*** ./app/books/meetings.component.ts ***!
  \*****************************************/
/*! exports provided: Meetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meetings", function() { return Meetings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var Meetings = /** @class */ (function () {
    function Meetings() {
    }
    Meetings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "meetings",
            template: __webpack_require__(/*! raw-loader!./meetings.component.html */ "../node_modules/raw-loader/index.js!./app/books/meetings.component.html")
        })
    ], Meetings);
    return Meetings;
}());



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.meetings = [];
        this.books = [];
    }
    DataService.prototype.loadBooks = function () {
        var _this = this;
        return this.http.get("/api/books")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.books = data;
            return true;
        })));
    };
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/groups/0/meetings/getAll")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.meetings = data;
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
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["MeetingsModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\book_club\BookClub96\BookClub96\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map