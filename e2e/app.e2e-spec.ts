import { NgMobileWebAppPage } from './app.po';

describe('ng-mobile-web-app App', function() {
  let page: NgMobileWebAppPage;

  beforeEach(() => {
    page = new NgMobileWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
