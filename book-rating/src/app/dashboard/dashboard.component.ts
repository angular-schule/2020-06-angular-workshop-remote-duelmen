import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit(): void {
    this.books = [{
      isbn: '222',
      title: 'Angular',
      description: 'Tolles Buch!',
      rating: 5
    },
    {
      isbn: '333',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    },
    {
      isbn: '444',
      title: 'React',
      description: 'Olles Buch',
      rating: 1
    }];
  }

}
