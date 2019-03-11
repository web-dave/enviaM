import { AppPage } from './app.po';
import { browser, logging, until, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   browser.waitForAngular();
  //   browser.wait(until.elementsLocated(by.css('app-my-nav')));
  //   expect(page.getTitleText()).toEqual('Welcome to enviaM!');
  // });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser
  //     .manage()
  //     .logs()
  //     .get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(
  //     jasmine.objectContaining({
  //       level: logging.Level.SEVERE
  //     } as logging.Entry)
  //   );
  // });
});
