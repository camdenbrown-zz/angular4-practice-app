import { Angular4PracticeAppPage } from './app.po';

describe('angular4-practice-app App', () => {
  let page: Angular4PracticeAppPage;

  beforeEach(() => {
    page = new Angular4PracticeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
