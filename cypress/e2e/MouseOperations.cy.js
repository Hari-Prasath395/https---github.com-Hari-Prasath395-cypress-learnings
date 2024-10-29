describe("Mouse Operations", () => {
  it("Mosue Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.wait(3000);
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      ".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']"
    ).should("be.visible");
  });

  it.only("Right Click", () => {
    cy.visit("https://www.softwaretestingmentor.com/automation-practice-page-right-click-demo/");
    
    // Trigger the right-click action
    cy.get(".page-entry-title.entry-title")
      .rightclick();
    
    // Wait for the context menu to become visible
    //cy.get("#customContextMenu") // Adjust this selector to the context menu's container
     // .should("be.visible"); // Check if the context menu is visible

    // Now check if the specific link is visible within the context menu
    
});


  it("Double Click", () => {});
  it("Drag and Drop using plugin", () => {});

  it("Scrolling Page", () => {});
});
