import "cypress-iframe";
require('@4tw/cypress-drag-drop')

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

  it("Right Click", () => {
    cy.visit("https://www.softwaretestingmentor.com/automation-practice-page-right-click-demo/");
    
    // Trigger the right-click action
    cy.get(".page-entry-title.entry-title")
      .rightclick();
    
    // Wait for the context menu to become visible
    //cy.get("#customContextMenu") // Adjust this selector to the context menu's container
     // .should("be.visible"); // Check if the context menu is visible

    // Now check if the specific link is visible within the context menu
    
});


describe("Handling Frames", () => {
  it("Double Click", () => {
      cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");

      cy.frameLoaded("#iframeResult"); // Load the frame

      // Using trigger() for double-click
      cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick");
      cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!");

      //Using Double click 

      // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
      // cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!");

  });
});

it.only("Drag and Drop using cypress plugin", () => {
  cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

  // Using the drag-drop plugin to drag #box6 to #box106
  cy.get("#box6").drag("#box106", { force: true });
});

  it("Scrolling Page", () => {

  });
});
