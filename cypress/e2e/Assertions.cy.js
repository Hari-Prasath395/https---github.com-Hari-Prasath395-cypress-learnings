

describe("Assertions demo", () => {
  it("Implicit Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //Should and
    /*
        cy.url().should('include','orangehrmlive');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain','orangehrm');
        
        cy.url().should('include','orangehrmlive').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').
        should('contain','orangehrm');
        */
    cy.url()
      .should("include", "orangehrmlive")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "greenhrm");

    //Need to verify the title of the web page

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    //Need to verify any element in the webpage - Logo

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    //To find number of links in a webpage

    cy.xpath("//a").should("have.length", "6");

    //Enter value to the input field and validate

    cy.get('input[placeholder="Username"]')
      .type("Admin")
      .should("have.value", "Admin");
  });


  it("Explicit Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
     
    cy.get('input[placeholder="Username"]').type('Admin');
    cy.get('input[placeholder="Password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    let expectedUser = "Ram Prudhvi Admin";

    cy.get(".oxd-userdropdown-name").then((x)=>{

        let actualUser = x.text();

        //BDD Style
        expect(expectedUser).to.equal(actualUser);
        // expect(expectedUser).to.not.equal(actualUser);

        //TDD Style
        assert.equal(actualUser,expectedUser);
        // assert.notEqual(actualUser,expectedUser);
    })


  });
});

