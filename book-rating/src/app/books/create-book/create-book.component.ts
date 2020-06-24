import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  create = new EventEmitter<Book>();

  constructor() {
    this.bookForm.get('isbn').valueChanges.subscribe(isbn => {
      // this.isbnChanged.emit(isbn);
    });
  }

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
    // rating --> decide for a 3rd party lib first!
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  // hands on --> name: 'isbn'    errorCode: 'required' | 'minlength'
  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.hasError(errorCode);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1,
      price: 10
    };

    this.create.emit(newBook);
    this.bookForm.reset();
  }
}
