import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  private destroy$ = new Subject();


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

    observable1.subscribe(observer);


    // --------------------------
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
