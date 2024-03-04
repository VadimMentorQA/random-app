describe("Main page", () => {
  it("Clicks the button and checks the Y. Kostenko as the quote author", () => {
    cy.visit("http://localhost:3000");

    cy.get("#quoteButton").click();

    cy.get("#authorDisplay").should("contain", "Y. Kostenko");
  });
});
