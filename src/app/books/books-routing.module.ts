import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { LeaveGuard } from './shared/leave.guard';
import { BookTitleComponent } from './book-title/book-title.component';

const titleRegex = '^(?:([^/]+))$';
const isbnRegex =
  // tslint:disable-next-line:max-line-length
  '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        canDeactivate: [LeaveGuard]
      },
      {
        path: 'new',
        component: BookNewComponent,
        canDeactivate: [LeaveGuard]
      },
      {
        matcher: url => {
          if (url.length === 1 && url[0].path.match(isbnRegex)) {
            return {
              consumed: url,
              posParams: {
                isbn: new UrlSegment(url[0].path, {})
              }
            };
          }

          return null;
        },
        component: BookDetailsComponent
      },
      {
        matcher: url => {
          if (url.length === 1 && url[0].path.match(titleRegex)) {
            return {
              consumed: url,
              posParams: {
                title: new UrlSegment(url[0].path, {})
              }
            };
          }

          return null;
        },
        component: BookTitleComponent
      },
      // {
      //   path: ':isbn',
      //   component: BookDetailsComponent
      // },
      {
        path: ':isbn/edit',
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
