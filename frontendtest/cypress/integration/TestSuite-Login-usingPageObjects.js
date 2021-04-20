/// <reference types="cypress" /> 

import * as indexFuncs from '../pages/indexpage'
import * as overviewFuncs from '../pages/testerhoteloverviewpage'

//test suite for Login

describe('Testsuite for Login',function(){
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleIndexPage(cy)
    }) //det här görs innan varje testfall 
    
    //test case Login
        it('Login', function(){

          indexFuncs.validLogin(cy, 'Login') //funkar. Men kanske man vill skicka med user och pwd ist? 
            overviewFuncs.checkTitleOfTesterHotelOverviewPage(cy,overviewFuncs.checkTitleOfTesterHotelOverviewPage) 
            indexFuncs.logOut(cy,'Login')
        })

 //test case Login-fail
        it('Login Error', function(){

            indexFuncs.enterUserAndPwOnIndexPage(cy, 'hej','hello','Bad username or password') //skickar in felaktig user. icke inloggad. 
          })
    })