import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  // arrange
  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '00',
      title: 'Test',
      description: '',
      rating: 3
    };
  });

  // [JIRA-1212] As a end user, I expect the rating like on Amazon
  it('should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

  it('should return a new book instance if rating increases (assuming immutability)', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);
  });

  // it('should return the same unchanged book if rating stays (assuming immutability)', () => {
  //   book.rating = 5;
  //   const ratedBook = service.rateUp(book);
  //   expect(ratedBook).toBe(book);
  // });
});
