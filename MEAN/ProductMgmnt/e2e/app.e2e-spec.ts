import { ProductMgmntPage } from './app.po';

describe('product-mgmnt App', () => {
  let page: ProductMgmntPage;

  beforeEach(() => {
    page = new ProductMgmntPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
