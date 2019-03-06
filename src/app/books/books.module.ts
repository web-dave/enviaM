import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    BookEditComponent
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule]
})
export class BooksModule {}
