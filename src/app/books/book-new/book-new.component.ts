import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  constructor(
    private formBuilder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [
        '',
        [Validators.required, postcodeValidator, Validators.minLength(6)]
      ],
      isbn: ['', [Validators.required, Validators.minLength(6)]],
      publisher: this.formBuilder.group({
        name: ['', [postcodeValidator]],
        url: ['', [Validators.required]]
      })
    });
  }

  saveBook() {
    const book = this.service.getNewBook();
    console.log(book);
    const newBook = {
      ...book,
      ...this.form.value
    };
    this.service.createBook(newBook).subscribe(b => {
      this.saved = true;
      this.router.navigate(['..', b.isbn], { relativeTo: this.route });
    });
  }

  isSaved() {
    return this.saved || !this.form.dirty;
  }
}

import { ValidatorFn, AbstractControl } from '@angular/forms';
export function postcodeValidator(): ValidatorFn {
  return (control: AbstractControl): { postcode: any } | null => {
    const pcRegEx = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}$/;
    return pcRegEx.test(control.value)
      ? { postcode: { value: control.value } }
      : null;
  };
}
