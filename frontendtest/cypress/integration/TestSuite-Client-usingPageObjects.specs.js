/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'
import * as targets from '../targets/targets'

//test suite for new Client
describe('Testsuite for Client',function(){
    beforeEach(() => { //det här görs innan varje testfall 
        cy.visit(targets.base_url)
        indexFuncs.checkTitleIndexPage(cy)
    }) 
 
    afterEach(() => { //det här görs efter varje testfall 
        indexFuncs.logOut(cy,'Login')
    }) 

    
    //test case Create Client 
        it('Create Client', function(){

            indexFuncs.validLogin(cy, 'Login') //funkar. Men kanske man vill skicka med user och pwd ist? 
            overviewFuncs.checkTitleOfTesterHotelOverviewPage(cy,overviewFuncs.checkTitleOfTesterHotelOverviewPage)
            overviewFuncs.navigateToClientsPage(cy, 'Clients') //navigerar till clients view och kollar att det står Clients. 
        })


    // test case Edit Client. 
        it('Create Client', function(){

            indexFuncs.validLogin(cy, 'Login') //funkar. Men kanske man vill skicka med user och pwd ist? 
            overviewFuncs.checkTitleOfTesterHotelOverviewPage(cy,overviewFuncs.checkTitleOfTesterHotelOverviewPage)
            overviewFuncs.navigateToClientsPage(cy, 'Clients') //navigerar till clients view och kollar att det står Clients. 
  })


    })