import { FirstAngular2CalculatorPage } from './app.po';

describe('first-angular2-calculator App', () => {
  let page: FirstAngular2CalculatorPage;

  beforeEach(() => {
    page = new FirstAngular2CalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
