import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, timer, Subscription, Subject, Observable } from 'rxjs';
import { map, filter, scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  isbn$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  constructor(private route: ActivatedRoute) { }
}
