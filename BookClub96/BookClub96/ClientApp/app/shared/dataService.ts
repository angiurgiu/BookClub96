import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, OperatorFunction } from "rxjs"
import { map } from "rxjs/operators"
import { Book } from "./book"

@Injectable()
export class DataService
{
    constructor(private http: HttpClient)
    {
    }

    public books: Book[] = [];

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/books")
            .pipe((map((data: any[]) =>
            {
                this.books = data;
                return true;
            })) as OperatorFunction<any,boolean>);
    }
}
