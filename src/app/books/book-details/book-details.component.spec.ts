import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from '../shared/book.service';
import { BookServiceMock } from 'TestMocks/book.service.mock';
import { books } from 'TestMocks/books.mock';

@Pipe({ name: 'pages' })
class PagesPipe implements PipeTransform {
  transform(n) {
    return n;
  }
}

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let compiled: HTMLElement;
  let mySpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent, PagesPipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: BookService,
          useClass: BookServiceMock
        }
      ]
    }).compileComponents();
    mySpy = spyOn(TestBed.get(BookService), 'getBook').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement as HTMLDivElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call BookService', () => {
    expect(mySpy).toHaveBeenCalled();
  });
  it('should show tbe recived Book', () => {
    expect(compiled.querySelector('.card-header').innerHTML).toContain(
      books[0].title
    );
  });
});
