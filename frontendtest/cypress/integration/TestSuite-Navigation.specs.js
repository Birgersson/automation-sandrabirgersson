/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'

//test suite for Navigation

describe('Testsuite for navigation',function(){
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleIndexPage(cy)
    }) //det här görs innan varje testfall 

    
    //test case XXX
        it('Navigate', function(){

          indexFuncs.navigateToTesterHotelOverviewPage(cy, 'Login') //funkar. Men kanske man vill skicka med user och pwd ist? 

        })
    })
    