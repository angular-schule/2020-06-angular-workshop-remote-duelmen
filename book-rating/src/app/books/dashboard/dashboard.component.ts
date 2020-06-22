import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // Vorsicht: hier werden wir einen Bug bekommen!!
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) {
  }

  ngOnInit(): void {
    this.books = [{
      isbn: '222',
      title: 'Angular',
      description: 'Tolles Buch!',
      rating: 5,
      price: 36.9
    },
    {
      isbn: '333',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3,
      price: 10
    },
    {
      isbn: '444',
      title: 'React',
      description: 'Olles Buch',
      rating: 1,
      price: 1.22
    }];
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    // const rating = Math.max(book.rating - 1, 1);
    // const ratedBook = {
    //   ...book,
    //   rating
    // };
    this.update(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    // const rating = Math.min(book.rating + 1, 5);
    // const ratedBook = {
    //   ...book,
    //   rating
    // };
    this.update(ratedBook);
  }

  update(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
