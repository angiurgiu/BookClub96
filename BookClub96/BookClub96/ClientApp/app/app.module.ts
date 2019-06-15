import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookList } from './books/bookList.component'
import { DataService } from './shared/dataService'

@NgModule({
  declarations: [
      AppComponent,
      BookList
  ],
  imports: [
    BrowserModule
  ],
    providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
