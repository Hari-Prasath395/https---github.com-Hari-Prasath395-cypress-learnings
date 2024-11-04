

describe("MyTest", () => {
  // Direct Access
  it.skip("Fixtures demo", () => {
    // Visit the login page
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Load fixture data directly
    cy.fixture('orangeHRM').then((data) => {
      // Type username and password using fixture data
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();
      // Verify the dashboard text
      cy.xpath("//h6[normalize-space()='Dashboard']").should("have.text", data.expected);
    });
  });

  // Access through hooks - for multiple it blocks
  before(() => {
    // Load fixture data and alias it for later use
    cy.fixture('orangeHRM').as('userData');
  });

  it("Fixtures demo with hooks", function() {
    // Visit the login page
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Use the aliased user data from the fixture
    cy.get("input[placeholder='Username']").type(this.userData.username);
    cy.get("input[placeholder='Password']").type(this.userData.password);
    cy.get("button[type='submit']").click();
    // Verify the dashboard text
    cy.xpath("//h6[normalize-space()='Dashboard']").should("have.text", this.userData.expected);
  });
});
