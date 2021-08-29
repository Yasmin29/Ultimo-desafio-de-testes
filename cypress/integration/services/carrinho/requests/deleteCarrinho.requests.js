/// <reference types="cypress" />

function deletar(auth){
    return cy.request({
        method: "DELETE",
        url: "carrinhos/cancelar-compra",
        headers: {
            accept: "Application/jason",
            Authorization: auth
        },
        failOnStatusCode: false
    })
}

export {deletar}