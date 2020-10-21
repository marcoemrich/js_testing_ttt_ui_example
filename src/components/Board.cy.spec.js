/// <reference types="cypress" />

context("Tic Tac Toe", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=tic-tac-toe-board--clickable-board-test&viewMode=story"
    );
  });

  it("be clickable", () => {
    console.log(cy.get("[data-testid='board']")); //.clickAtCell = () => alert("foo");
    cy.get("[data-testid='cell_1|1']").click().should("contain", "X");
  });
});
