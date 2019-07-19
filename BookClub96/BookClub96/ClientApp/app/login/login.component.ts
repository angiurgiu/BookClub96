import { Component } from "@angular/core";
import { Router } from '@angular/router'

import { DataService } from "../shared/dataService"

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class Login {
    constructor(private data: DataService, private router: Router) { }

    public creds = {
        username: "",
        password: ""
    };

    onLogin() {
        alert(this.creds.username);
    }
}
