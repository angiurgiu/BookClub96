import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { MeetingsComponent } from './app.component';
import { BookList } from './books/meetingList.component'
import { MeetingManager } from './books/meetingManager.component'
import { DataService } from './shared/dataService'


@NgModule({
  declarations: [
      MeetingsComponent,
      BookList,
      MeetingManager
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
    providers: [
    DataService
  ],
    bootstrap: [MeetingsComponent]
})
export class MeetingsModule { }
