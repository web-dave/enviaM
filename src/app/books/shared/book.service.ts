import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { IBook } from './costum-types';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }
  getBook(isbn: string) {
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get<IBook>(url);
  }
  updateBook(book: IBook) {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.put<IBook>(url, book);
  }
}
