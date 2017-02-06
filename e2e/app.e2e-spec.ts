import { DmAngularSolutionsPage } from './app.po';

describe('dm-angular-solutions App', function() {
  let page: DmAngularSolutionsPage;

  beforeEach(() => {
    page = new DmAngularSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
