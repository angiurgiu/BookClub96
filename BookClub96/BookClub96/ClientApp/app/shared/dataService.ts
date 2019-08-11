import { HttpClient } from "@angular/common/http"
import { HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, OperatorFunction } from "rxjs"
import { map } from "rxjs/operators"

import { Book } from "./book"
import { Group } from "./group"
import { GroupMember } from "./group"
import { Meeting } from "./meeting"
import { Member } from "./member"

@Injectable()
export class DataService
{
    constructor(private http: HttpClient)
    {
    }

    private token: string = "";
    private tokenExpiration: Date;

    public editedMeeting: Meeting;

    public meetings: Meeting[] = [];

    public groups: Group[] = [];

    public books: Book[] = [];

    public currentUser: Member;
    public username: string;

    loadBooks(): Observable<boolean> {
        return this.http.get("/api/books")
            .pipe((map((data: any[]) => {
                this.books = data;
                return true;
            })) as OperatorFunction<any, boolean>);
    }

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/groups/0/meetings/getAll")
            .pipe((map((data: any[]) =>
            {
                this.meetings = data;
                return true;
            })) as OperatorFunction<any,boolean>);
    }

    loadGroups(): Observable<boolean> {
        return this.http.get("/api/groups?includeMeetings=true&getAll=true")
            .pipe((map((data: any[]) => {
                this.groups = data;
                return true;
            })) as OperatorFunction<any, boolean>);
    }

    loadCurrentUser(): Observable<boolean> {
            return this.http.get("/api/membership/currentUser")
                .pipe((map((data: any) => {
                    this.currentUser = data;
                    return true;
                })) as OperatorFunction<any, boolean>);
        }

    public get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(creds): Observable<boolean> {
        return this.http.post("/account/createtoken", creds)
            .pipe((map((data: any) => {
                    this.token = data.token;
                    this.tokenExpiration = data.expiration;
                    this.username = creds.username;

                    return true;
                })) as OperatorFunction<any, boolean>);
    }

    public editMeeting(meeting: Meeting) {
        this.editedMeeting = meeting;
    }

    public createMeeting() {
    }

    public saveMeeting() {
    }

    joinGroup(groupMember: GroupMember) {
        return this.http.post("/api/groupmembers", groupMember,
                {
                    headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                })
            .pipe((map((data: any) => {
                return true;
            })) as OperatorFunction<any, boolean>);
    }

    leaveGroup(groupMember: GroupMember) {
        return this.http.post("/api/groupmembers/remove", groupMember,
                {
                    headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                })
            .pipe((map((data: any) => {
                return true;
            })) as OperatorFunction<any, boolean>);
    }

    createGroup(group: Group) {
        return this.http.post("/api/groups", group)
            .pipe((map((data: any) => {
                return true;
            })) as OperatorFunction<any, boolean>);
    }
}
