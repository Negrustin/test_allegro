/// <reference types="cypress" />

describe('Test register Allegro', () => {
  it('openSite', () => {
    cy.visit('https://allegro.pl.allegrosandbox.pl/rejestracja/konto-firmowe/nowe-konto/',{
      // headers: {
      //   'Set-Cookie': 'gdpr_permission_given=0;',
      //   'User-Agent': 'cypress'
      // },
      failOnStatusCode:false,
      log:true

    })
    cy.get('#email').type("ddskfjskd@lkjfdd.com")


  })
})
