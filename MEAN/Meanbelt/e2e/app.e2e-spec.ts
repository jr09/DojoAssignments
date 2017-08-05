import { MeanbeltPage } from './app.po';

describe('meanbelt App', () => {
  let page: MeanbeltPage;

  beforeEach(() => {
    page = new MeanbeltPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
