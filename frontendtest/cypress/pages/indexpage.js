/// <reference types="cypress" /> 

//elements
const indexPageTitle = 'Testers Hotel'
const userNameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const navLogin = '.btn'
const user1 = 'tester01'
const pw1 = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'
const user = 'user'
const pw = 'pw'
const navLogOut = '.user > .btn'

//const navTesterHotel = 

//actions

function checkTitleIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
}

function validLogin(cy, contentToConfirm){
    cy.get(':nth-child(1) > input').type(user1)  
    cy.get(':nth-child(2) > input').type(pw1)
    cy.get(navLogin).click()
    cy.contains(contentToConfirm)
}
function enterUserAndPwOnIndexPage(cy, user, pw, contentToConfirm){
    cy.get(':nth-child(1) > input').type(user)  
    cy.get(':nth-child(2) > input').type(pw)
    cy.get(navLogin).click()
    cy.contains(contentToConfirm)
}
function logOut (cy, contentToConfirm){
    cy.get(navLogOut).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports = {
    checkTitleIndexPage,
    validLogin,
    enterUserAndPwOnIndexPage,
    logOut

}