/// <reference types="cypress" />

describe('Funcionalidade do produto', () => {

    beforeEach(() => {
        cy.visit('http://automationpratice.com.br/#!')
    })

    it.only('Deve selecionar um produto e colocar no carrinho', () => {
        let quantidade = 4;
        cy.get('#video > .row >').contains('Belkin Boost Up Power Pack').click()
        cy.get('.product-color-green').click()
        cy.get(':nth-child(3) > .button').click()
        cy.get('.links_Product_areas > .theme-btn-one').click()
        cy.get('.item-count').should('contain', quantidade)
        
        
    });

})