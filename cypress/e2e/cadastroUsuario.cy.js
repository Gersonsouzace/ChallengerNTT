import { gerarNomeAleatorio } from '../support/nameRandom';

describe('CastroUsuario', () => {
    let data
    before(() => {
        data = gerarNomeAleatorio(8)

    })

    it('Realizar cadastro de usuario com sucesso!', ()=>{
        cy.LoginSucesso('gerson@teste.com', '123asd')
        cy.get('[data-testid="cadastrarUsuarios"]').click()
        cy.get('[data-testid="nome"]').type(data)
        cy.get('[data-testid="email"]').type(data+'@teste.com')
        cy.get('[data-testid="password"]').type('asd123')
        cy.get('[data-testid="cadastrarUsuario"]').click()
        cy.url().should('eq', 'https://front.serverest.dev/admin/listarusuarios')
        cy.get('h1').contains('Lista dos usuários')

    } )
})