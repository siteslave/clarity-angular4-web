import { WmPage } from './app.po';

describe('wm App', () => {
  let page: WmPage;

  beforeEach(() => {
    page = new WmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
