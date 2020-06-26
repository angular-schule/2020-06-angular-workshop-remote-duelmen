import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooksLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

// export const selectFirstBook = createSelector(
//   selectBooks,
//   books => books[0]
// );

// export const selectFirstTitleFromBooks = createSelector(
//   selectFirstBook,
//   book => book?.title
// );


// nur zur Info --> computed selector

export const selectBookViaIsbn = createSelector(
  selectBooks,
  (books, props) => books.find(b => b.isbn === props.isbn)
);
