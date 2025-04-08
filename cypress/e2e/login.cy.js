describe('Login', () => {

    it('Realizar login admin com sucesso!', ()=>{
        cy.LoginSucesso('gerson@teste.com', '123asd')
        cy.url().should('eq', 'https://front.serverest.dev/admin/home')
        cy.get(':nth-child(2) > .card > .card-body > .card-title').contains('Cadastrar Usuários')
    } ),

    it('Realizar login admin com dados invalidos!', ()=>{
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type('gerson@teste.com')
        cy.get('[data-testid="senha"]').type('senhafalha')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('be.visible').contains('Email e/ou senha inválidos')
    } )
})