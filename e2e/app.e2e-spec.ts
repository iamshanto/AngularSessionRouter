import { RouterSessionPage } from './app.po';

describe('router-session App', function() {
  let page: RouterSessionPage;

  beforeEach(() => {
    page = new RouterSessionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
