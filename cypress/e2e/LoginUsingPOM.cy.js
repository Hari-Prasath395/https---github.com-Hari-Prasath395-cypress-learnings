import login from "../PageObjects/login";

describe("Login using pageobjects", () => {
    
    it("should login successfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        const ln = new login();

        ln.setUsername("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
    });

});
