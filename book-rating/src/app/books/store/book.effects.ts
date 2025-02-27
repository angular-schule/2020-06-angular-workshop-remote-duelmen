import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';



@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      switchMap(() =>
        this.bs.getBooks().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  loadSingleBook$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadSingleBook),
      switchMap(({ isbn }) =>
        this.bs.getSingleBook(isbn).pipe(
          map(data => BookActions.loadSingleBookSuccess({ data })),
        )
      )
    );
  });

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}
