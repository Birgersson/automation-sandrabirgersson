/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'

//test suite for new Client

describe('Testsuite for Client',function(){
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleIndexPage(cy)
    }) //det här görs innan varje testfall 

    afterEach(() => {
        indexFuncs.logOut(cy,'Login')
    }) //det här görs efter varje testfall 

    
    //test case XXX
        it('Navigate', function(){

          indexFuncs.validLogin(cy, 'Login') //funkar. Men kanske man vill skicka med user och pwd ist? 
            overviewFuncs.checkTitleOfTesterHotelOverviewPage(cy,overviewFuncs.checkTitleOfTesterHotelOverviewPage)
            overviewFuncs.navigateToClientsPage(cy, 'Clients') //navigerar till clients view och kollar att det står Clients. 
        })
    })