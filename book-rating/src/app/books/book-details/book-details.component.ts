import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  sub: Subscription;
  sub2: Subscription;


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

    this.sub = observable2.subscribe(observer);
    this.sub2 = observable2.subscribe(observer);

    // subscription.unsubscribe();

    // --------------------------
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();

  }

}
