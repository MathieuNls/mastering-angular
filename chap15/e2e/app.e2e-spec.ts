import { Chap9BisPage } from './app.po';

describe('chap9-bis App', function() {
  let page: Chap9BisPage;

  beforeEach(() => {
    page = new Chap9BisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
