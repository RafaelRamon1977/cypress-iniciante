/// <reference types="cypress" />


export default {

    clicarCAdastrar() {
        cy.get('#btnLogin')
            .click()

    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)

    },

    preencheEmail(email) {
        cy.get('#user')
            .type(email)


    },

    preenchePassword(password) {
        cy.get('#password')
            .type(password)

    },

    validarMensagemSucesso(nome) {
        cy.get('#swal2-title',)
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${nome}`)

    }



}   