import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription, Subject, Observable } from 'rxjs';
import { map, filter, scan, reduce } from 'rxjs/operators';

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
    // const observable1 = of('😎', '😇', '🤓');

    const observable2 = new Observable<number>(subscriber => {
      subscriber.next(1);
      setTimeout(() => subscriber.next(2), 1000);
      const x = setTimeout(() => { subscriber.next(3); console.log('Brennt das Licht noch?'); }, 2000);
      subscriber.next(4);
      subscriber.next(5);
      subscriber.next(6);
      subscriber.next(7);

      const y = setTimeout(() => subscriber.complete(), 3000);

      return () => {
        console.log('Machen wir mal schnell das Licht aus!');
        clearTimeout(x);
        clearTimeout(y);
      };
    });

    // 3. Baustein: Subscription
    const subscription = observable2.pipe(
      // 4. Baustein: Operatoren
      map(x => x * 10),
      filter(x => x >= 30),
      reduce((a, b) => a + b),
      map(x => '🍕'.repeat(x)),
    ).subscribe(observer);

    setTimeout(() => subscription.unsubscribe(), 4000);

    // --------------------------
  }
}
