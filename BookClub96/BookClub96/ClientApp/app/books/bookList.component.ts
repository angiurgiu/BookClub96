import { Component } from "@angular/core"
import { DataService } from "../shared/dataService"

@Component({
    selector: "book-list",
    templateUrl: "bookList.component.html",
    styles: []
})
export class BookList {

    constructor(private data: DataService) {
        this.books = data.books;
    }

    public books = [];
}