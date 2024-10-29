

describe("X-PathLoacators", () => {
  it("find no of products", () => {
    cy.visit('http://www.automationpractice.pl/index.php');
    cy.get("a[title='Women']").click();
    cy.xpath("//a[@class='product_img_link']").should('have.length', 7);

  });
});
