import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from "../shared/dataService";
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
    Login = tslib_1.__decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map