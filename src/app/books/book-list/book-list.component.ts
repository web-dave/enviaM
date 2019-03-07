import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BookService } from '../shared/book.service';
import { Subscription } from 'rxjs';
import { IBook } from '../shared/costum-types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookListComponent implements OnInit, OnDestroy, AfterViewChecked {
  books: IBook[];
  sub = new Subscription();
  timer;
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  selectBook(b: IBook) {
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.changeBook();
    }, 1000);
    this.sub.add(
      this.service.getBooks().subscribe(b => {
        this.books = b;
        this.cdr.detectChanges();
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    clearInterval(this.timer);
  }

  ngAfterViewChecked(): void {
    // console.log('Book-List');
  }
  changeBook() {
    // this.cdr.detectChanges();
    this.books[0].numPages++;
  }
  isSaved() {
    console.log('Book.List');
    return true;
  }
}
