/// <reference types="cypress" />

import acessar_login from "../support/pages/acessar_login"
import login_page from "../support/pages/login_page"

describe('Login', () => {

   //hook(beforeeach)
   beforeEach('Acessar login de usuário', () => {
      acessar_login.acessarLoginUsuario()

   })

   it('Campo email vazio', () => {
      login_page.clicarCAdastrar()
      login_page.validarMensagemErro('E-mail inválido.')


   })


   it('Campo email invalido', () => {

      login_page.preencheEmail('email inválido')
      login_page.clicarCAdastrar()
      login_page.validarMensagemErro('E-mail inválido.')


   })

   it('Campo senha vazio', () => {
      login_page.preencheEmail('Emile.Lueilwitz79@hotmail.com')
      login_page.clicarCAdastrar()
      login_page.validarMensagemErro('Senha inválida.')

   })

   it('Campo senha invalido', () => {
      login_page.preencheEmail('Emile.Lueilwitz79@hotmail.com')
      login_page.preenchePassword('123')
      login_page.clicarCAdastrar()
      login_page.validarMensagemErro('Senha inválida.')


   })


   it.only('Login com sucesso', async () => {

      const vnome = await 'Emile.Lueilwitz79@hotmail.com'

      login_page.preencheEmail('Emile.Lueilwitz79@hotmail.com')
      login_page.preenchePassword('123456')
      login_page.clicarCAdastrar()
      login_page.validarMensagemSucesso(vnome)


   })

})