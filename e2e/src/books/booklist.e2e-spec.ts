import { browser, logging } from 'protractor';
import { BookListPage } from './booklist.po';

describe('workspace-project App', () => {
  let page: BookListPage;

  beforeEach(() => {
    page = new BookListPage();
  });

  it('should display New BTN', () => {
    expect(page.findElem('.btn.btn-default.btn-sm')).toBeTruthy();
  });
  it('should fins a book in list and click it', () => {
    const bookInListBtn = page.findElem('app-book-preview button');
    // console.log(bookInList);
    bookInListBtn.click();
    browser.sleep(1400);
    expect(browser.getCurrentUrl()).toBe('');
  });

  //   afterEach(async () => {
  //     // Assert that there are no errors emitted from the browser
  //     const logs = await browser
  //       .manage()
  //       .logs()
  //       .get(logging.Type.BROWSER);
  //     expect(logs).not.toContain(
  //       jasmine.objectContaining({
  //         level: logging.Level.SEVERE
  //       } as logging.Entry)
  //     );
  //   });
});
