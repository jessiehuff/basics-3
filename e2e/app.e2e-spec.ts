import { Basics3Page } from './app.po';

describe('basics-3 App', function() {
  let page: Basics3Page;

  beforeEach(() => {
    page = new Basics3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
