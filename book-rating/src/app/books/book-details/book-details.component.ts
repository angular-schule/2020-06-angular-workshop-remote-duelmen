import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(paramMap => this.isbn = paramMap.get('isbn'));

    // --------------------------
    // AB HIER IST DER PLAYGROUND

    // 1. Baustein: Observer
    const observer = {
      next: e => console.log(e),
      error: err => console.log('ERROR!', err),
      complete: () => console.log('COMPLETE!')
    };

    // 2. Baustein: Observable
    const observable1 = of('😎', '😇', '🤓');
    const observable2 = timer(0, 500);

    const subscription = observable2.subscribe(observer);
    // subscription.unsubscribe();




    // --------------------------
  }

}
