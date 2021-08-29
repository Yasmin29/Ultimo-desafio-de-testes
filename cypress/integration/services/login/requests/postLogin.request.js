/// <reference types="cypress" /> 

let payloadLogin = require('../payloads/add-login.payloads.json')

function entrar() {
     
    return cy.request({
        method: "POST",
        url: "login",
        headers: {
            accept: "aplication/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
    })
}
export {entrar}