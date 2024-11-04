describe("Browser Navigation", () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Ignore uncaught exceptions
      });
    });
  
    it("Navigation test", () => {
      cy.visit("https://demo.opencart.com/");
      cy.title().should("eq", "Your Store"); // This is the home page
      cy.xpath("//a[normalize-space()='Cameras']").click();
      
      // Wait for the heading to be visible and check its text
      cy.get("div[id='content'] h2", { timeout: 10000 }).should("have.text", "Cameras"); // Cameras page
      cy.go("back");
      cy.title().should("eq", "Your Store"); // Back to the home page
  
      cy.go("forward");
      cy.get("div[id='content'] h2", { timeout: 10000 }).should("have.text", "Cameras"); // Cameras page
  
      cy.go(-1);
      cy.title().should("eq", "Your Store"); // Back to the home page
  
      cy.reload(); // Reloading the page
    });
  });
  