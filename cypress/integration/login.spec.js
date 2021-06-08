// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.instagram.com/')
    })
    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
            .type('fake@email.com').should('have.value', 'fake@email.com')


    })
    it('.input other then userIDCheck', () => {
        // https://on.cypress.io/type


        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('Clear this text')
            .should('have.value', 'Clear this text')
            .clear()
            .should('have.value', '')
    })
})