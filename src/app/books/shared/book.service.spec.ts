import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { books } from 'TestMocks/books.mock';
import { IBook } from './costum-types';

describe('BookService', () => {
  let service: BookService;
  let backEnd: HttpTestingController;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );
  beforeEach(() => {
    service = TestBed.get(BookService);
    backEnd = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    backEnd.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks should return Books', done => {
    service.getBooks().subscribe(b => {
      expect(b).toEqual(books);
      done();
    });
    const req = backEnd.expectOne(service.restRoot);
    expect(req.request.method).toBe('GET');
    req.flush(books);
  });
  it('getBook should return a Book', done => {
    service.getBook('123').subscribe(b => {
      expect(b).toEqual(books[0]);
      done();
    });
    const req = backEnd.expectOne(service.restRoot + '/123');
    expect(req.request.method).toBe('GET');
    req.flush(books[0]);
  });
  it('updateBook should return the updated Book', done => {
    const updatedBook: IBook = {
      ...books[1],
      title: 'Huhahahahaha',
      isbn: '33333333'
    };
    service.updateBook(updatedBook).subscribe(b => {
      expect(b).toEqual(updatedBook);
      done();
    });
    const req = backEnd.expectOne(service.restRoot + '/33333333');
    expect(req.request.method).toBe('PUT');
    req.flush(updatedBook);
  });
  it('createBook should return the updated Book', done => {
    const newBook: IBook = {
      ...books[1],
      title: 'Huhahahahaha',
      isbn: '33333333'
    };
    service.createBook(newBook).subscribe(b => {
      expect(b).toEqual(newBook);
      done();
    });
    const req = backEnd.expectOne(service.restRoot);
    expect(req.request.method).toBe('POST');
    req.flush(newBook);
  });
});
