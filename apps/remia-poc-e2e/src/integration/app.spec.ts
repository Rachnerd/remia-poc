import { getGreeting } from '../support/app.po';

describe('remia-poc', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to remia-poc!');
  });
});
