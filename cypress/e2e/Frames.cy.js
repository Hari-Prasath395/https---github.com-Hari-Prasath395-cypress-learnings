import "cypress-iframe";

describe("Handling Frames", () => {
  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    let iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
  });

  it("Approach 2 -by using custom command", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.getIframe("#mce_0_ifr").clear().type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
  });

  it.only("Approach 2 -by using cypress iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.frameLoaded("#mce_0_ifr"); // load the frame

    cy.iframe("#mce_0_ifr").clear().type("welcome {ctrl+a}");
  });
});
