/// <reference types="Cypress" />

describe("Test contact-us form via AutomationTestStore",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit("https://automationteststore.com")
        cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get('#ContactUsFrm_first_name').type("Juan")
        cy.get('#ContactUsFrm_email').type("juan.martinez@juan.com")
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("This is a test done with cypress")
        cy.get('button[title="Submit"]').click()

    });

    it("Should not be able to submit a successful submission via contact-us form as all fields must be fullfilled", ()=>{
        cy.visit("https://automationteststore.com")
        cy.xpath('//a[text()="Contact Us"]').click()
        cy.get('#ContactUsFrm_first_name').type("Juan")
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type("This is a test done with cypress")
        cy.get('button[title="Submit"]').click()
    });
})