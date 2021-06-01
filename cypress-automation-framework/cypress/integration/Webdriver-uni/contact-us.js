/// <reference types="Cypress" />

describe("Test contact-us form via WebDriverUni",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').type("Juan")
        cy.get('[name="last_name"]').type("Martinez")
        cy.get('[name="email"]').type("juan.martinez@juan.com")
        cy.get('textarea.feedback-input').type("This is a test done with cypress")
        cy.get('[type="submit"]').click()

    });

    it("Should not be able to submit a successful submission via contact-us form as all fields must be fullfilled", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Jose")
        cy.get('[name="last_name"]').type("Martinez")
        cy.get('textarea.feedback-input').type("This is a test done with cypress")
        cy.get('[type="submit"]').click()

    });
})