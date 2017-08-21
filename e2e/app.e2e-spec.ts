import { NgRecipesPage } from './app.po';

describe('ng-recipes App', () => {
  let page: NgRecipesPage;

  beforeEach(() => {
    page = new NgRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
