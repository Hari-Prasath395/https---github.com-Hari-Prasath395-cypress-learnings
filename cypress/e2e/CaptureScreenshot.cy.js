describe("Explore SS and Videos", () => {
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false; // Ignore uncaught exceptions
      });
    });
  
    // Taking screenshots of the entire page and a specific part like the logo
    it("SShots and videos", () => {
      cy.visit("https://demo.opencart.com/");
      
      // Take a screenshot of the entire page
      cy.screenshot("Home Page");
      
      // Wait for the logo to be visible before taking a screenshot
      cy.get("img[title='Your Store']").should("be.visible").then(() => {
        cy.get("img[title='Your Store']").screenshot("Logo");
      });
  
      // Automatically capture screenshots & video on failure - only when executed on CLI
      cy.xpath("//a[normalize-space()='Cameras']").click();
      cy.get("div[id='content'] h2", { timeout: 10000 }).should("have.text", "Cameras"); // Fixed the expected text
    });
  });
  