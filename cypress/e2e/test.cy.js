describe('circleCi test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });


  it("Should render a Header on load", () => {
       cy.get(".header").find("h1").should("contain", "CONCERT CREW");
  });
    it("Should render a Login form", () => {
      cy.get(".login-form").should("exist");
    });


})