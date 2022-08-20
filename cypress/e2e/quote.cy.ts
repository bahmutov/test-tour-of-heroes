it('loads the quote', () => {
  cy.intercept({
    method: 'GET',
    pathname: '/api/quotes/1'
  }, {
    body: {
      id: 1,
      quote: 'This is a test quote'
    }
  }).as('quote')
  cy.visit('/about')
  cy.wait('@quote')
  cy.contains('This is a test quote').should('be.visible')
})
