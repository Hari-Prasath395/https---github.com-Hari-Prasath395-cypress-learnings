describe('CssLocators', () => {
    it('should search for T-Shirts', () => {
        cy.visit('http://www.automationpractice.pl/index.php');
        cy.get('#search_query_top').type('T-Shirts');
        cy.get('[name="submit_search"]').click(); // Fixed button click selector
        cy.get('.lighter').should('contain.text', 'T-Shirts'); // Assertion fixed
    });
});
