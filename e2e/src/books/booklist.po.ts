import { browser, by, element } from 'protractor';

export class BookListPage {
  findElem(selector) {
    return element(by.css(selector));
  }
}
