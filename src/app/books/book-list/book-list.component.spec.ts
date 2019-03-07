import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { books } from 'TestMocks/books.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../shared/book.service';
import { of } from 'rxjs';

@Component({
  template: '',
  selector: 'app-book-preview'
})
class PreviewComponent {
  @Input() book;
  @Input() trigger;
  @Output() bookselected = new EventEmitter();
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, PreviewComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
    const serv = TestBed.get(BookService);
    spyOn(serv, 'getBooks').and.returnValue(of(books));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of books', () => {
    component.ngOnInit();
    clearInterval(component.timer);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('app-book-preview').length).toBe(
      books.length
    );
  });
});
