/* global cy */
describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.visit('http://localhost:3000');

        cy.get('#energy').type('400');
        cy.get('#totalFat').type('20');
        cy.get('#saturatedFat').type('3');
        cy.get('#sugar').type('10');
        cy.get('#protein').type('8');
        cy.get('#fibre').type('0');
        cy.get('#salt').type('1');
        cy.get('#vegetableFruitNuts').type('0');

        cy.get('#submit').click();

        cy.get('#nutriscore').should('contain', '5')
    })
  })