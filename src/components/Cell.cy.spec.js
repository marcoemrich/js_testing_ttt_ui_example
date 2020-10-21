/// <reference types="cypress" />

context("Tic Tac Toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6006/iframe.html?id=tic-tac-toe-cell--clickable&viewMode=story");
  });

  it("be clickable", () => {
    cy.get("[data-testid='cell_1|2']").should("not.contain", "X").click().should("contain", "X");
  });
});
