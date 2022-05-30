/* eslint-disable no-undef */
describe("loging test",()=>{
    it("login",()=>{
      // Load the page
        cy.visit("http://localhost:8080/")

        // Enter credentials
        cy.get("#email").type("test@gmail.com");
        cy.get("#password").type("1234");

        // Click submit button
        cy.get(".login-button").click();

        // Assert Profile destination
        cy.url().should("include", "/profile"); 
    })
});
