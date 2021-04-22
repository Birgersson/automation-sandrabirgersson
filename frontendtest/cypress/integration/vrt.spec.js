/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as roomsFuncs from '../pages/roomspage'
import * as clientsFunc from '../pages/clientspage'
import * as reservationFuncs from '../pages/reservationspage'
import * as billsFuncs from '../pages/billspage'
import * as targets from '../targets/targets'

//test suite for Visual regression testing, with screenshots
describe('Testsuite for navigation',function(){
    beforeEach(() => {  
        cy.visit(targets.base_url)
        indexFuncs.checkIndexPage(cy)
    }) 
    afterEach(() => { 
        overviewFuncs.logOut(cy)
        indexFuncs.checkIndexPage(cy)
    })  
        it('Navigate the site using View and Back-buttons', function(){
            cy.percySnapshot('indexPage-Snapshot') 
            
            indexFuncs.validLogin(cy, targets.user1, targets.pw1)  
            overviewFuncs.checkTesterHotelOverviewPage(cy) //overviewpage
            cy.percySnapshot('OverviewPage-Snapshot')

            overviewFuncs.navigateToClientsPage(cy) //clientspage
            clientsFunc.checkClientsPage(cy)
            cy.percySnapshot('ClientsPage-Snapshot')

            clientsFunc.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToReservationsPage(cy)
            reservationFuncs.checkReservationsPage(cy)
            cy.percySnapshot('ReservationsPage-Snapshot')

            reservationFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToRoomsPage(cy)
            roomsFuncs.checkRoomsPage(cy)
            cy.percySnapshot('RoomsPage-Snapshot')

            roomsFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
            overviewFuncs.navigateToBillsPage(cy)
            billsFuncs.checkBillsPage(cy)
            cy.percySnapshot('BillsPage-Snapshot')

            billsFuncs.navigateBack(cy)
            overviewFuncs.checkTesterHotelOverviewPage(cy)
        })
    })