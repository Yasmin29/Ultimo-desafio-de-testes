/// <reference types="cypress" />
let payloadCarrinho = require('../../carrinho/payloads/add-carrinho.payloads.json')

function criar(auth){
    return cy.request({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "Application/jason",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadCarrinho
    })
}

export {criar}