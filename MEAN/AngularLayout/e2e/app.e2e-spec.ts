import { AngularLayoutPage } from './app.po';

describe('angular-layout App', () => {
  let page: AngularLayoutPage;

  beforeEach(() => {
    page = new AngularLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
