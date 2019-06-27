import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { BookList } from './books/bookList.component'
import { DataService } from './shared/dataService'


@NgModule({
  declarations: [
      AppComponent,
      BookList
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
    providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
