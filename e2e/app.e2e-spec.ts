import { GhNearbyPage } from './app.po';

describe('gh-nearby App', function() {
  let page: GhNearbyPage;

  beforeEach(() => {
    page = new GhNearbyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
