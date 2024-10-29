

describe("Interaction with tabs", () => {
  it("Approach 1 with tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    cy.xpath("//a[normalize-space()='Click Here']")
      .invoke("removeAttr", "target")
      .click();

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000);

    cy.go("back"); //back to parent tab
  });

  it.only("Approach 2 with tabs", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    cy.xpath("//a[normalize-space()='Click Here']").then((e) => {
      let url = e.prop("href");

      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.wait(5000);

    cy.go("back"); //back to parent tab
  });
});
