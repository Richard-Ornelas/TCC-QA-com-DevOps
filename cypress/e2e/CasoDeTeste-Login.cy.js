///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste
    return false;
  });

describe('Login Casos de testes', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/login#!')

    });

    it('Login com Dados Válidos', () => {
        cy.get('#user').type('aluno@gmail.com');
        cy.get('#password').type('senha@123');
        cy.get('button#btnLogin').click();
        
        
        
    });

    it(' Realizar o login com campo e-mail vazio ', () => {
        cy.get('#password').type('senha@123');
        cy.get('button#btnLogin').click();
        
    });

    it(' Realizar login com campos Obrigatórios vazios', () => {
        cy.get('button#btnLogin').click();
        
    });

    it(' Realizar o login com campo senha com menos de 6 caracteres ', () => {
        cy.get('#user').type('aluno@gmail.com');
        cy.get('#password').type('12345');
        cy.get('button#btnLogin').click();
        
    });

    
});
