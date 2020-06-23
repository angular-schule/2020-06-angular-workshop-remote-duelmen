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
    const control = this.bookForm.get(name);
    return control.touched && control.hasError(errorCode);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1,
      price: 10
    };

    // Hands on
    // 1. Erzeuge ein Event mit dem Namen "create"
    // 2. Emitte das Event
    // 3. Subscribe auf das Event im HTML des Dashboards
    // 4. Füge da neue Buch dem Buch-Array hinzu,
    //    beachte das Prinzip der Unveränderbarkeit

    this.bookForm.reset();
  }
}
