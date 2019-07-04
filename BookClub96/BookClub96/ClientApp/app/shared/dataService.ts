import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, OperatorFunction } from "rxjs"
import { map } from "rxjs/operators"
import { Book } from "./book"
import { Meeting } from "./meeting"

@Injectable()
export class DataService
{
    constructor(private http: HttpClient)
    {
    }

    public editedMeeting: Meeting;

    public meetings: Meeting[] = [];

    public books: Book[] = [];

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

    public editMeeting(meeting: Meeting) {
        this.editedMeeting = meeting;
    }

    public createMeeting() {
    }

    public saveMeeting() {
    }
}
