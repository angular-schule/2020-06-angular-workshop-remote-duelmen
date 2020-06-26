import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../store/book.actions';
import { selectBooks, selectBooksLoading, selectBookViaIsbn } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  // nur zur Info
  specialBook$ = this.store.pipe(select(selectBookViaIsbn, { isbn: '42' }));

  currentDate = new Date();

  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }


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
