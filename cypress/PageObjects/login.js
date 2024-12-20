class login{

    setUsername(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text',"Dashboard");
    }
}

export default login;