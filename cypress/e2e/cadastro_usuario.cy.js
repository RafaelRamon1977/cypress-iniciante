/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import comum_page from '../support/pages/comum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

const nome =

    describe('Cadastro de usuário', () => {

        beforeEach('Acessar cadastro de usuário', () => {
            comum_page.acessarCadastroUsuario()

        })

        it('Campo nome vazio', () => {
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')

        })

        it('Campo email vazio', () => {
            cadastro_page.preencheNome(faker.person.fullName())
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

        })

        it('Campo email invalido', () => {
            cadastro_page.preencheNome(faker.person.fullName())
            cadastro_page.preencheEmail(faker.person.firstName())
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

        })

        it('Campo senha vazio', () => {
            cadastro_page.preencheNome(faker.person.fullName())
            cadastro_page.preencheEmail(faker.internet.email())
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')


        })

        it('Campo senha invalido', () => {
            cadastro_page.preencheNome(faker.person.fullName())
            cadastro_page.preencheEmail(faker.internet.email())
            cadastro_page.preenchePassword('123')
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')


        })

        it('Login com sucesso', async () => {

            const name = await faker.person.fullName()

            cadastro_page.preencheNome(name)
            cadastro_page.preencheEmail(faker.internet.email())
            cadastro_page.preenchePassword('123456')
            cadastro_page.clicarCadastrar()
            cadastro_page.validarMesagemSucesso(name)
        })

    })
