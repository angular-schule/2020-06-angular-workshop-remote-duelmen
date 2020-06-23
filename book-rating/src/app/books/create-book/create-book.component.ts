import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

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

  }
}
