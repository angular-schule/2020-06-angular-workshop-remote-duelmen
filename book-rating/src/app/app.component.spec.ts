import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookComponent } from './books/book/book.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        // DashboardComponent, BookComponent --> Integration Test
        // MyOwnDashboardComponent ---> Unit Test
      ],
      schemas: [NO_ERRORS_SCHEMA] // ---> Shallow Unit Test
    }).compileComponents();

    // setTimeout(() => console.log('Hallo World'), 4500);
  }));

  it(`should have as title 'Book Rating'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Book Rating');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Book Rating');
  });
});
