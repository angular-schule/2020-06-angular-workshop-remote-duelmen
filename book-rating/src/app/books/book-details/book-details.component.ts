import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, catchError, retry } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => of({
        title: 'Error',
        price: 0,
        description: err.message
      }))
    ))
  );

  constructor(private route: ActivatedRoute,
              private bs: BookStoreService) {
  }
}
