
/// <reference types="cypress" />
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('Open the url to rent car', () => {
cy.visit('http://qalab.pl.tivixlabs.com/')

})

Then('Fill all the fields to search for cars availiable for rent for specific dates' , ()=>{

cy.get('select[id="country"]').select('2')
cy.get('select[id="city"]').select('4')
cy.get('input#model').type('Volkswagen Touran')
cy.get('input#pickup').type('2022-05-24')
cy.get('input#dropoff').type('2022-05-25')

})

And('click on search button', ()=>{
    
    cy.get('#search_form > button').click()

})


