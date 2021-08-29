/// <reference types="cypress" />
var payloadAddUsuario = require ('../payloads/add-usuarios.payloads.json')
var faker = require ('faker')

function criar(){
    payloadAddUsuario.nome = "Nome Lindo"
    payloadAddUsuario.email = faker.internet.email()
    payloadAddUsuario.password = "teste"
    
    return cy.request({
        method: "POST",
        url: "usuarios",
        headers: {
            accept: "Application/json"
        },
        failOnStatusCode: false,
        body: payloadAddUsuario
    })
}
export {criar}