describe("My Data-Driven Test", () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
      });
    });
  
    it("Data Driven demo", () => {
      // Load fixture data
      cy.fixture("orangeHRM2").then((data) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // Iterate over each user data entry
        data.forEach((userData) => {
          cy.get("input[placeholder='Username']").clear().type(userData.username);
          cy.get("input[placeholder='Password']").clear().type(userData.password);
          cy.get("button[type='submit']").click();
  
          if (userData.username === "Admin" && userData.password === "admin123") {
            cy.xpath("//h6[normalize-space()='Dashboard']").should("have.text", userData.expected);
            cy.xpath("//img[@class='oxd-userdropdown-img']").click();
            cy.xpath("//a[normalize-space()='Logout']").click();
            cy.wait(2000);
          } else {
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userData.expected);
          }
  
          cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        });
      });
    });
  });
  