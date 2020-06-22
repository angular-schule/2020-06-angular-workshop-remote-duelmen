import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
// import { DashboardComponent } from './books/dashboard/dashboard.component';
// import { BookComponent } from './books/book/book.component';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeDe);
    console.table(localeDe);
  }
}
