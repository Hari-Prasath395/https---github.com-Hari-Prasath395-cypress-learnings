describe("Interactions on Alert", () => {
  it("Simple Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    //alerts will be handled by cypress itself

    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Confirm Alert OK Button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    //alerts will be handled by cypress itself

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Confirm Alert - Cancel Button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    //alerts will be handled by cypress itself

    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("JS prompt Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();

    // cy.on('window:prompt',()=>false);
    cy.get("#result").should("have.text", "You entered: Welcome");
    // cy.get('#result').should('have.text','You entered: null');
  });

  it.only("Authenticated Alert", () => {
    //Approach 1:
    // cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin',password:'admin'}});
    // cy.get('p').should('contain','Congratulations!')

    //Approach 2:

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  });
});
