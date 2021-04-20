/// <reference types="cypress" /> 

//elements
const indexPageTitle = 'Testers Hotel'
const navLogin = '.btn'
//const navTesterHotel = 

//actions

function checkTitleIndexPage(){
    cy.title().should('eq', indexPageTitle)
}

function navigateToTesterHotelOverviewPage(cy, contentoToConfirm){
    cy.get(':nth-child(1) > input').type('tester01')  
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get(navLogin).click()
    cy.contains(contentoToConfirm)
}
//Exports
module.exports = {
    checkTitleIndexPage,
    navigateToTesterHotelOverviewPage

}