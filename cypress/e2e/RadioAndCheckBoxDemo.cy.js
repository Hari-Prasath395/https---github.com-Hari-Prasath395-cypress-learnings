
describe('Check UI elements',()=>{

    it.skip('interacting with radio buttons',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');

        //Visibility of radio buttons
        
        cy.xpath("//input[@id='male']").should('be.visible');
        cy.xpath("//input[@id='female']").should('be.visible');

        //Selecting radio buttons

        cy.xpath("//input[@id='male']").check().should('be.checked');
        cy.xpath("//input[@id='female']").should('be.not.checked');

        cy.xpath("//input[@id='female']").check().should('be.checked');
        cy.xpath("//input[@id='male']").should('be.not.checked');
    })

    it('Interacting with check boxes', () => {
        cy.visit('https://testautomationpractice.blogspot.com/');
    
        // Visibility of the element
        cy.get('#monday').should('be.visible');
    
        // Selecting a single check box
        cy.get('#monday').check().should('be.checked');
    
        // Unchecking the check box
        cy.get('#monday').uncheck().should('not.be.checked');
    
        // Selecting all check boxes individually and asserting each
        cy.get('input.form-check-input[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({ force: true }).should('be.checked');
        });
    
        // Unselecting all the checkboxes
        cy.get('input.form-check-input[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).uncheck({ force: true }).should('not.be.checked');
        });
    
        // Select the first checkbox and assert it's checked
        cy.get('input.form-check-input[type="checkbox"]').first().check({ force: true }).should('be.checked');
    
        // Select the last checkbox and assert it's checked
        cy.get('input.form-check-input[type="checkbox"]').last().check({ force: true }).should('be.checked');
    });
    
})