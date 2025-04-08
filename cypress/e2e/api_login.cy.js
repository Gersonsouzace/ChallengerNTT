import { gerarNomeAleatorio } from '../support/nameRandom';

describe('API testing login', () =>{
    let nome
    before(() => {
        nome = gerarNomeAleatorio(8)

    })

    it('Login com sucesso', () =>{
        cy.request({
            method: 'post',
            url: 'https://serverest.dev/login',
            body: {
                "email": "gerson@qa.com.br",
                "password": "teste"
              }
        }).then((res)=>{
            expect(res.status).to.equal(200); 
            expect(res.body).to.not.empty
            expect(res.body.message).contain('Login realizado com sucesso')             
        })
    })
    it('Listar todos os usuario', () =>{
        cy.request({
            method: 'Get',
            url: 'https://serverest.dev/usuarios',
        }).then((res)=>{
            expect(res.status).to.equal(200); 
            expect(res.body).to.not.empty
        })
    })
    it('Usuario ja cadastrado', () =>{
        cy.request({
            method: 'post',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": nome,
                "email": `${nome}@qa.com.br`,
                "password": "teste",
                "administrador": "true"
              }
        }).then((res)=>{
            expect(res.status).to.equal(201); 
            expect(res.body).to.not.empty
            expect(res.body.message).contain('Cadastro realizado com sucesso')             
        })
    })
})