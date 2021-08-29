/// <reference types="cypress" />
import * as postUsuarios from '../../usuarios/requests/postUsuarios.request'
import * as getProdutos from '../../produtos/requests/getProdutos.requests'
import * as postLogin from '../../login/requests/postLogin.request'
import * as postCarrinho from '../../carrinho/requests/postCarrinho.requests'
import * as postDeletar from '../../carrinho/requests/deleteCarrinho.requests'


describe('desafio', () => {
    it('desafio', () => {
       
        postLogin.entrar().should((resPostLogin) => {
            expect(resPostLogin.status).to.eq(200)

            getProdutos.listar().should((resGetProdutos) => {
                expect(resGetProdutos.status).to.eq(200)

                postCarrinho.criar(resPostLogin.body.authorization, resGetProdutos.body.produtos[0]).should((resCarrinho) => {
                    expect(resCarrinho.status).to.eq(201)
                    expect(resCarrinho.body.message).to.eq('Cadastro realizado com sucesso')
                    
                    postDeletar.deletar(resPostLogin.body.authorization).should((resDeletar) => {
                        expect(resDeletar.status).to.eq(200)
                    })
                }) 
            })
        })   
    })  
})