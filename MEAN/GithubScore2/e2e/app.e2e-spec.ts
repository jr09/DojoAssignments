import { GithubScore2Page } from './app.po';

describe('github-score2 App', () => {
  let page: GithubScore2Page;

  beforeEach(() => {
    page = new GithubScore2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
