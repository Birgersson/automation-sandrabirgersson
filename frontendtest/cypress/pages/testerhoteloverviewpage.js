/// <reference types="cypress" /> 

//elements
const titleOfTesterHotelOverviewPage = 'Testers Hotel'
const navViewRoomLink = 'div.block:nth-child(1) > a:nth-child(3)'
const navViewClientsLink = 'div.block:nth-child(2) > a:nth-child(3)'
const navViewBillsink = 'div.block:nth-child(3) > a:nth-child(4)'
const navViewReservationsLink = 'div.block:nth-child(4) > a:nth-child(4)'


//functions
function checkTitleOfTesterHotelOverviewPage(cy){
    cy.title().should('eq', titleOfTesterHotelOverviewPage)
}

function navigateToClientsPage(cy, contentToConfirm){
    cy.get(navViewClientsLink).click()
    cy.contains(contentToConfirm)
}

//exports
module.exports = {
    checkTitleOfTesterHotelOverviewPage,
    navigateToClientsPage

}