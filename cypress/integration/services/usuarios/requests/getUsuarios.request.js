/// <reference types="cypress" />

function listar(){
    return cy.request({
        method: "GET",
        url: "usuarios",
        headers: {
            accept: "Application/jason"
        },
        failOnStatusCode: false
    })
}

export {listar}