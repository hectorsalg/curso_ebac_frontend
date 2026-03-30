/// <reference types="cypress" />

describe('Testes de Funcionalidades da Agenda de Contatos', () => {
  
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/');
  });

  it('Deve incluir um novo contato', () => {
    cy.get('input[type="text"]').type('Hector Salgueiros');
    cy.get('input[type="email"]').type('hectorsalgueiros@ebac.com.br');
    cy.get('input[type="tel"]').type('11999999999');

    cy.get('button[type="submit"]').click();

    cy.contains('Hector Salgueiros').should('be.visible');
    cy.contains('hectorsalgueiros@ebac.com.br').should('be.visible');
    cy.contains('11999999999').should('be.visible');
  });

  it('Deve alterar um contato existente', () => {
    cy.contains('Hector Salgueiros')
      .parent()
      .parent()
      .parent()
      .find('.edit')
      .click();

    cy.get('input[type="text"]').clear().type('Hector Atualizado');
    cy.get('input[type="email"]').clear().type('hectoratualizado@ebac.com.br');
    cy.get('input[type="tel"]').clear().type('11888888888');

    cy.get('button[type="submit"]').click();

    cy.contains('Hector Salgueiros').should('not.exist');
    cy.contains('Hector Atualizado').should('be.visible');
    cy.contains('hectoratualizado@ebac.com.br').should('be.visible');
    cy.contains('11888888888').should('be.visible');
  });

  it('Deve remover um contato', () => {
    cy.contains('Hector Atualizado')
      .parent()
      .parent()
      .parent()
      .find('.delete')
      .click();

    cy.contains('Hector Atualizado').should('not.exist');
  });

});