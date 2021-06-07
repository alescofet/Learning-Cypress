/// <reference types="Cypress" />

describe("Test contact-us form via WebDriverUni",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force:true})
        cy.get('[name="first_name"]').should('to.be.empty')
        cy.get('[name="first_name"]').type("Juan")
        cy.get('[name="last_name"]').should('to.be.empty')
        cy.get('[name="last_name"]').type("Martinez")
        cy.get('[name="email"]').should('to.be.empty')
        cy.get('[name="email"]').type("juan.martinez@juan.com")
        cy.get('textarea.feedback-input').should('to.be.empty')
        cy.get('textarea.feedback-input').type("This is a test done with cypress")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    });

    it("Should not be able to submit a successful submission via contact-us form as all fields must be fullfilled", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Jose")
        cy.get('[name="last_name"]').type("Martinez")
        cy.get('textarea.feedback-input').type("This is a test done with cypress")
        cy.get('[name="email"]').should('to.be.empty')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')

    });
})

