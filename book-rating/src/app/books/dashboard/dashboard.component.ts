import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store } from '@ngrx/store';
import { loadBooks } from '../store/book.actions';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // Vorsicht: hier werden wir einen Bug bekommen!!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  //#region nur für Gregor :D
  books: Book[] = [];
  currentDate = new Date();
  //#endregion

  //#region constructors
  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }
  //#endregion


  ngOnInit(): void {
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // // const rating = Math.max(book.rating - 1, 1);
    // // const ratedBook = {
    // //   ...book,
    // //   rating
    // // };
    // this.update(ratedBook);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const rating = Math.min(book.rating + 1, 5);
    // // const ratedBook = {
    // //   ...book,
    // //   rating
    // // };
    // this.update(ratedBook);
  }

  update(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
