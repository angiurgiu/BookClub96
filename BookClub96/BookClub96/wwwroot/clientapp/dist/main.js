(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!./app/admin/createMeeting.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/admin/createMeeting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light p-1 m-1\">\r\n\r\n    <h3>Create Meeting</h3>\r\n    <div><strong>Book</strong>: </div>\r\n    <div><strong>Meeting time</strong>: </div>\r\n    <div><strong>Address</strong>: </div>\r\n\r\n    <strong>Host: </strong>\r\n\r\n    <strong>Attendees:</strong>\r\n\r\n    <button id=\"createButton\" class=\"btn btn-success\" (click)=\"createMeeting()\">Create</button>\r\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/groups.component.html":
/*!**************************************************************!*\
  !*** ../node_modules/raw-loader!./app/groups.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/groups/groups.component.html":
/*!*********************************************************************!*\
  !*** ../node_modules/raw-loader!./app/groups/groups.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUserSignedIn() && loadedGroups\">\r\n    <strong class=\"alert-info\">My groups:</strong>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let g of groups\">\r\n            <div class=\"card bg-light p-1 m-1\" *ngIf=\"isMember(g)\">\r\n                <ul>\r\n                    <li><strong>Group Name</strong>: {{g.groupName}}</li>\r\n                    <li><strong>Type</strong>: {{GroupType[g.type]}}</li>\r\n                    <br />\r\n                    <strong>Members:</strong>\r\n                    <ul *ngFor=\"let member of g.members\">\r\n                        <li>{{member.member.userName}}</li>\r\n                    </ul>\r\n                </ul>\r\n                <button class=\"btn btn-success\" (click)=\"leave(g)\">Leave Group</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"loadedGroups\">\r\n    <strong class=\"alert-info\">Groups:</strong>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let g of groups\">\r\n            <div class=\"card bg-light p-1 m-1\" *ngIf=\"!isMember(g)\">\r\n                <ul>\r\n                    <li><strong>Group Name</strong>: {{g.groupName}}</li>\r\n                    <li><strong>Type</strong>: {{GroupType[g.type]}}</li>\r\n                    <br />\r\n                    <strong>Members:</strong>\r\n                    <ul *ngFor=\"let member of g.members\">\r\n                        <li>{{member.member.userName}}</li>\r\n                    </ul>\r\n                </ul>\r\n                <button class=\"btn btn-success\" *ngIf=\"canJoin(g)\" (click)=\"joinGroup(g)\">Join Group</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<div>\r\n\r\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/login/login.component.html":
/*!*******************************************************************!*\
  !*** ../node_modules/raw-loader!./app/login/login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\"/>\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">PAssword is required!</div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\"/>\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/meetings.component.html":
/*!****************************************************************!*\
  !*** ../node_modules/raw-loader!./app/meetings.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/meetings/meetingList.component.html":
/*!****************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/meetings/meetingList.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"book-info col-md-12\" *ngFor=\"let m of meetings\">\r\n        <div class=\"card bg-transparent p-1 m-1\">\r\n            <div class=\"row\">\r\n                <div class=\"book-info col-md-5\">\r\n                    <div class=\"card bg-light p-1 m-1\">\r\n                        <img src=\"/img/{{m.book.bookId}}.jpg\" class=\"img-fluid\" [alt]=\"m.book.title\" />\r\n                        <div class=\"book-name\">{{ m.book.title }}</div>\r\n                        <ul class=\"book-props\">\r\n                            <li><strong>Author</strong>: {{m.book.author}}</li>\r\n                            <li><strong>Title</strong>: {{m.book.title}}</li>\r\n                            <li><strong>Genre</strong>: {{m.book.genre}}</li>\r\n                        </ul>\r\n                        <button id=\"editButton\" class=\"btn btn-success\" (click)=\"editMeeting(m)\">Edit</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"book-info col-md-7\">\r\n                    <ul class=\"book-props\">\r\n                        <li><strong>Address</strong>: {{m.address}}</li>\r\n                        <li><strong>Time</strong>: {{m.time}}</li>\r\n                        <div *ngFor=\"let attendee of m.attendees\">\r\n                            <div *ngIf=\"attendee.isHost\"><strong>Host</strong>: {{ attendee.member.userName }}</div>\r\n                        </div>\r\n                        <strong>Attendees:</strong>\r\n                        <ul *ngFor=\"let attendee of m.attendees\">\r\n                            <li>{{attendee.member.userName}}</li>\r\n                        </ul>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/meetings/meetingManager.component.html":
/*!*******************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/meetings/meetingManager.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-light p-1 m-1\">\r\n    <div *ngIf=\"data.editedMeeting; then thenBlock else elseBlock\"></div>\r\n    <ng-template #thenBlock>\r\n        <h3>Edit Meeting</h3>\r\n        <div><strong>Book</strong>: {{ data.editedMeeting.book.title }}</div>\r\n        <div><strong>Meeting time</strong>: {{ data.editedMeeting.time }}</div>\r\n        <div><strong>Address</strong>: {{ data.editedMeeting.address }}</div>\r\n\r\n        <strong>Host: </strong>\r\n        <select *ngFor=\"let attendee of data.editedMeeting.attendees\">\r\n            <div *ngIf=\"attendee.isHost; then thenBlock else elseBlock\"></div>\r\n            <ng-template #thenBlock>\r\n                <option value=\"{{ attendee.member.userName }}\" selected=\"selected\">{{ attendee.member.userName }}</option>\r\n            </ng-template>\r\n            <ng-template #elseBlock>\r\n                <option value=\"{{ attendee.member.userName }}\">{{ attendee.member.userName }}</option>\r\n            </ng-template>\r\n        </select>\r\n\r\n        <strong>Attendees:</strong>\r\n        <ul *ngFor=\"let attendee of data.editedMeeting.attendees\">\r\n            <li>{{attendee.member.userName}}</li>\r\n        </ul>\r\n        <button id=\"editButton\" class=\"btn btn-success\" (click)=\"saveMeeting()\">Save</button>\r\n    </ng-template>\r\n    <ng-template #elseBlock>\r\n        <img src=\"https://knowledgequest.aasl.org/wp-content/uploads/2015/01/books.png\"/>\r\n        <a routerLink=\"/admin/createmeeting\" class=\"btn btn-success\">Create new meeting</a>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./app/meetings/meetings.component.html":
/*!*************************************************************************!*\
  !*** ../node_modules/raw-loader!./app/meetings/meetings.component.html ***!
  \*************************************************************************/
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
/*! exports provided: GroupsComponent, MeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function() { return MeetingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.title = "Book Club 96 Groups";
    }
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-groups",
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "../node_modules/raw-loader/index.js!./app/groups.component.html")
        })
    ], GroupsComponent);
    return GroupsComponent;
}());

var MeetingsComponent = /** @class */ (function () {
    function MeetingsComponent() {
        this.title = "Book Club 96 Meetings";
    }
    MeetingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-meetings",
            template: __webpack_require__(/*! raw-loader!./meetings.component.html */ "../node_modules/raw-loader/index.js!./app/meetings.component.html")
        })
    ], MeetingsComponent);
    return MeetingsComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: MeetingsModule, GroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsModule", function() { return MeetingsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsModule", function() { return GroupsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _meetings_meetingList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetings/meetingList.component */ "./app/meetings/meetingList.component.ts");
/* harmony import */ var _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings/meetings.component */ "./app/meetings/meetings.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups/groups.component */ "./app/groups/groups.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./app/login/login.component.ts");
/* harmony import */ var _meetings_meetingManager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meetings/meetingManager.component */ "./app/meetings/meetingManager.component.ts");
/* harmony import */ var _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/createMeeting.component */ "./app/admin/createMeeting.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");















var meetingRoutes = [
    {
        path: "",
        component: _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__["Meetings"]
    },
    {
        path: "admin/createmeeting",
        component: _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_10__["CreateMeeting"]
    }
];
var MeetingsModule = /** @class */ (function () {
    function MeetingsModule() {
    }
    MeetingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsComponent"],
                _meetings_meetingList_component__WEBPACK_IMPORTED_MODULE_5__["MeetingList"],
                _meetings_meetingManager_component__WEBPACK_IMPORTED_MODULE_9__["MeetingManager"],
                _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_6__["Meetings"],
                _admin_createMeeting_component__WEBPACK_IMPORTED_MODULE_10__["CreateMeeting"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["Login"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(meetingRoutes, {
                    useHash: true,
                    enableTracing: false // for debugging
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_11__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["MeetingsComponent"]]
        })
    ], MeetingsModule);
    return MeetingsModule;
}());

var groupRoutes = [
    {
        path: "",
        component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["Groups"]
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["Login"]
    }
];
var GroupsModule = /** @class */ (function () {
    function GroupsModule() {
    }
    GroupsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["Groups"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["Login"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(groupRoutes, {
                    useHash: true,
                    enableTracing: false // for debugging
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_11__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"]]
        })
    ], GroupsModule);
    return GroupsModule;
}());



/***/ }),

/***/ "./app/groups/groups.component.ts":
/*!****************************************!*\
  !*** ./app/groups/groups.component.ts ***!
  \****************************************/
/*! exports provided: Groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return Groups; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _shared_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/group */ "./app/shared/group.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");





var Groups = /** @class */ (function () {
    function Groups(data, router) {
        this.data = data;
        this.router = router;
        this.loadedUser = false;
        this.loadedGroups = false;
        this.groups = [];
        this.GroupType = _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"];
    }
    Groups.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadCurrentUser().subscribe(function (success) {
            if (success) {
                _this.loadedUser = true;
            }
        });
        this.data.loadGroups()
            .subscribe(function (success) {
            if (success) {
                _this.groups = _this.data.groups;
                _this.loadedGroups = true;
            }
        });
    };
    Groups.prototype.isUserSignedIn = function () {
        if (this.data.currentUser) {
            return true;
        }
        return false;
    };
    Groups.prototype.joinGroup = function (group) {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else if (this.canJoin(group)) {
            if (group.type === _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"].ByApplication) {
                alert("Sending application request.");
            }
            else if (group.type === _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"].Open) {
                this.data.joinGroup(group, this.data.currentUser);
            }
        }
    };
    Groups.prototype.canJoin = function (group) {
        if (this.isMember(group)) {
            alert("Already in group");
        }
        else if (group.type === _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"].Closed) {
            alert("Group is closed.");
        }
        else if (group.type === _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"].ByApplication) {
            alert("Need to send application request.");
        }
        else if (group.type === _shared_group__WEBPACK_IMPORTED_MODULE_3__["GroupType"].Open) {
            return true;
        }
        return false;
    };
    Groups.prototype.leave = function (group) {
        if (this.isMember(group)) {
            alert("Leaving group! Bye Felicia");
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
    Groups = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "groups",
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "../node_modules/raw-loader/index.js!./app/groups/groups.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Groups);
    return Groups;
}());



/***/ }),

/***/ "./app/login/login.component.ts":
/*!**************************************!*\
  !*** ./app/login/login.component.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");




var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
        this.errorMessage = "";
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            _this.router.navigate(["/"]);
        }, function (err) { return _this.errorMessage = "Failed to login."; });
    };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "../node_modules/raw-loader/index.js!./app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./app/meetings/meetingList.component.css":
/*!************************************************!*\
  !*** ./app/meetings/meetingList.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-info img {\r\n    max-width: 120px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.book-info .book-name {\r\n    font-size: medium;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbWVldGluZ3MvbWVldGluZ0xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9tZWV0aW5ncy9tZWV0aW5nTGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2staW5mbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uYm9vay1pbmZvIC5ib29rLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./app/meetings/meetingList.component.ts":
/*!***********************************************!*\
  !*** ./app/meetings/meetingList.component.ts ***!
  \***********************************************/
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
            template: __webpack_require__(/*! raw-loader!./meetingList.component.html */ "../node_modules/raw-loader/index.js!./app/meetings/meetingList.component.html"),
            styles: [__webpack_require__(/*! ./meetingList.component.css */ "./app/meetings/meetingList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MeetingList);
    return MeetingList;
}());



/***/ }),

/***/ "./app/meetings/meetingManager.component.ts":
/*!**************************************************!*\
  !*** ./app/meetings/meetingManager.component.ts ***!
  \**************************************************/
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
            template: __webpack_require__(/*! raw-loader!./meetingManager.component.html */ "../node_modules/raw-loader/index.js!./app/meetings/meetingManager.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MeetingManager);
    return MeetingManager;
}());



/***/ }),

/***/ "./app/meetings/meetings.component.ts":
/*!********************************************!*\
  !*** ./app/meetings/meetings.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! raw-loader!./meetings.component.html */ "../node_modules/raw-loader/index.js!./app/meetings/meetings.component.html")
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
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group */ "./app/shared/group.ts");





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
    DataService.prototype.loadGroups = function () {
        var _this = this;
        return this.http.get("/api/groups?includeMeetings=true&getAll=true")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.groups = data;
            return true;
        })));
    };
    DataService.prototype.loadCurrentUser = function () {
        var _this = this;
        return this.http.get("/api/membership/currentUser")
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
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
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
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
    DataService.prototype.joinGroup = function (group, member) {
        var groupMember = new _group__WEBPACK_IMPORTED_MODULE_4__["GroupMember"]();
        groupMember.memberId = member.id;
        groupMember.member = member;
        groupMember.group = group;
        groupMember.groupId = group.groupId;
        groupMember.isAdmin = false;
        var op = this.http.post("/api/groupmembers", groupMember);
        op.subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        return op;
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shared/group.ts":
/*!*****************************!*\
  !*** ./app/shared/group.ts ***!
  \*****************************/
/*! exports provided: Group, GroupType, GroupMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupType", function() { return GroupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMember", function() { return GroupMember; });
var Group = /** @class */ (function () {
    function Group() {
        this.meetings = new Array();
        this.members = new Array();
    }
    return Group;
}());

var GroupType;
(function (GroupType) {
    GroupType[GroupType["Open"] = 0] = "Open";
    GroupType[GroupType["Closed"] = 1] = "Closed";
    GroupType[GroupType["ByApplication"] = 2] = "ByApplication";
})(GroupType || (GroupType = {}));
var GroupMember = /** @class */ (function () {
    function GroupMember() {
    }
    return GroupMember;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["GroupsModule"])
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