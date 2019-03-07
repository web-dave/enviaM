import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';
import { books } from 'TestMocks/books.mock';
import { IBook } from '../shared/costum-types';

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;
  let compiled: HTMLElement;
  const book: IBook = books[0];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the Book Title', () => {
    component.book = book;
    component.trigger = 1;
    fixture.detectChanges();
    console.log(compiled);
    expect(compiled.querySelector('li').innerText).toBe(book.title);
  });

  it('should emit the book', done => {
    component.book = book;
    fixture.detectChanges();
    const btn = compiled.querySelector('button');
    component.bookselected.subscribe(b => {
      expect(b).toEqual(book);
      done();
    });
    btn.click();
  });
});
