import { Component, OnInit } from "@angular/core"
import { DataService } from "../shared/dataService"
import { Book } from "../shared/book"

@Component({
    selector: "book-list",
    templateUrl: "bookList.component.html",
    styleUrls: ["bookList.component.css"]
})
export class BookList implements OnInit {

    constructor(private data: DataService) {
    }

    public books: Book[] = [];

    ngOnInit(): void {
        this.data.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.books = this.data.books;
                }
            });
    }
}