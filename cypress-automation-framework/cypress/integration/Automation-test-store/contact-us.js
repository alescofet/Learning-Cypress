/// <reference types="Cypress" />

describe("Test contact-us form via AutomationTestStore",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit("https://automationteststore.com")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Juan")
        cy.get('#ContactUsFrm_email').type("juan.martinez@juan.com")
        cy.get('#ContactUsFrm_enquiry').type("This is a test done with cypress")
        cy.get('.col-md-6 > .btn').click()

    });

    it("Should not be able to submit a successful submission via contact-us form as all fields must be fullfilled", ()=>{
        cy.visit("https://automationteststore.com")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Juan")
        cy.get('#ContactUsFrm_enquiry').type("This is a test done with cypress")
        cy.get('.col-md-6 > .btn').click()
    });
})