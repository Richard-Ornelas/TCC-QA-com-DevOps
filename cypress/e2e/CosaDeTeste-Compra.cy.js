
///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste
    return false;
  });

describe('Cadastro Casos de testes', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/')

    });

    it('Realizar a compra dos produtos que estão no carrinho', () => {
        cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click()
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
        cy.get('#fname').type('Juliio');
        cy.get('#lname').type('Oliveira');
        cy.get('#cname').type('RRG');
        cy.get('#email').type('julio@gmail.com');
        cy.get('#country').select('usa');
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type('71829000');
        cy.get('#faddress').type('Norte estrada')
        cy.get('#messages').type('Ao sul do caminho')
        cy.get('.checkout-area-bg > .theme-btn-one').click()
        cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
        cy.get('h2').contains('Order success!');
    });

});