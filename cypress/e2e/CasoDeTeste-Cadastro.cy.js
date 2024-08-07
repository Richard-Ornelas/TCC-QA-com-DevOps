///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste
    return false;
  });

describe('Cadastro Casos de testes', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/register')

    });

    it('Cadastro com Dados Válidos', () => {
        cy.get('#user').type('Julio');
        cy.get('#email').type('aluno@gmail.com');
        cy.get('#password').type('senha@123');
        cy.get('button#btnRegister').click();
        cy.get('h2.swal2-title').should('have.text', 'Cadastro realizado!');
        
        
    });

    it('Cadastro com E-mail inexistente', () => {
        cy.get('#user').type('Julio')
        cy.get('#email').type('aluno85')
        cy.get('#password').type('senha@123')
        cy.get('button#btnRegister').click();
        
    });

    it('Campos Obrigatórios Vazios', () => {
        cy.get('button#btnRegister').click();
        
    });

    it('Realizar cadastro com menos de 6 digitos no campo senha', () => {
        cy.get('#user').type('Julio')
        cy.get('#email').type('aluno85@gmail.com')
        cy.get('#password').type('12345')
        cy.get('button#btnRegister').click();
        
    });

    
});
