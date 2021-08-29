/// <reference types="cypress" />  
let payloadAddProduto = require('../payloads/add-produto.payloads.json');
let faker = require('faker');

function adicionar(auth){
    payloadAddProduto.nome = faker.company.companyName()
   // payloadAddProduto.descricao = faker.lorem.words(6)

    return cy.request({

        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json", 
            Authorization: auth
        
        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}

export {adicionar}