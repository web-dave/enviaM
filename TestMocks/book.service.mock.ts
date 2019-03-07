import { IBook } from 'src/app/books/shared/costum-types';
import { of } from 'rxjs';
import { books } from './books.mock';
import { Book } from 'src/app/books/shared/Book.class';

export class BookServiceMock {
  getBooks() {
    return of(books);
  }
  getBook(isbn: string) {
    return of(books[0]);
  }
  updateBook(book: IBook) {
    return of(book);
  }
  createBook(book: IBook) {
    return of(book);
  }
  getNewBook(): IBook {
    return new Book();
  }
}
