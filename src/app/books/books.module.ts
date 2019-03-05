import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';
import { OrderBtnDirective } from './shared/order-btn.directive';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    OrderBtnDirective
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule]
})
export class BooksModule {}
