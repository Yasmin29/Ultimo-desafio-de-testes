/// <reference types="cypress" />

function listar(){
    return cy.request({
        method: "GET",
        url: "produtos",
        headers: {
            accept: "Application/jason"
        },
        failOnStatusCode: false
    
    })
}

export {listar}