

describe("Interacting with Dropdowns", () => {
  it.skip("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    cy.get("#zcf_address_country")
      .select("Italy")
      .should("have.value", "Italy");
  });

  it.skip("Dropdown without select ", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']").type("Italy").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });

  it.skip("Dropdown with auto suggest ", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Delhi");
    cy.get(".suggestion-title").contains("Delhi University").click();
  });

  it("Dropdown with auto suggest", () => {
    cy.visit("https://www.google.com/");
  
    // Type into the search box
    cy.get("[name='q']").type("Cypress Automation");
  
    // Wait for the auto-suggestions to appear
    cy.wait(3000);
  
    // Verify that suggestions are available
    cy.get("div.wM6W7d>span").should("have.length.greaterThan", 0);
  
    // Iterate through each suggestion
    cy.get("div.wM6W7d>span").each(($el) => {
      if ($el.text() === "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
  
    // Assert that the search box contains the selected value
    cy.get("[name='q']").should("have.value", "cypress automation tutorial");
  });
  
});
