import { TestBed, inject } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { books } from 'TestMocks/books.mock';

fdescribe('BookService', () => {
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
});
