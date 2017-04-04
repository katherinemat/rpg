import { RpgPage } from './app.po';

describe('rpg App', function() {
  let page: RpgPage;

  beforeEach(() => {
    page = new RpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
