/**
 * Hooks in Cypress are functions that allow you to run code at specific points during the execution of your tests. The primary hooks are:

        before(): Runs once before all tests in a block.
        beforeEach(): Runs before each test in a block.
        after(): Runs once after all tests in a block.
        afterEach(): Runs after each test in a block.
 */




describe("MyTest", () => {
  before(() => {
    cy.log("******** Launch app *******");
  });

  after(() => {
    cy.log("******** Close app *******");
  });

  beforeEach(() => {
    cy.log("******* Login ********");
  });

  afterEach(() => {
    cy.log("******* Login Out********");
  });

  it("search", () => {
    cy.log("******* Searching *******");
  });

  it.skip("Advanced search", () => {
    cy.log("******* Advanced Searching *******");
  });

  it.only("Listing Products", () => {
    cy.log("*******Listing Searching *******");
  });
});
