import { AppPage } from './app.po';

describe('wsi-coding App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('WILLIAMS SONOMA');
  });
});
