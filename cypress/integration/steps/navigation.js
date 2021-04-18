When('I navigate to the {string} screen', (pageName) => {
  const screen = pageName === 'home' ? '' : pageName;
  cy.visit(`/${screen}`);
});

Then('I see the screen with title {string}', (name) => {
  cy.findByRole('heading', { name }).should('exist');
});
