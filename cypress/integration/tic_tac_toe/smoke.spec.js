/// <reference types="cypress" />

context("Tic Tac Toe", () => {
  beforeEach(() => {
    cy.visit("localhost:1234");
  });

  it("should change the board", () => {
    cy.wait(500);
    cy.get("[data-testid='cell_1|1']").click();
    cy.wait(500);
    cy.get("[data-testid='cell_2|0']").click();
    cy.wait(500);
    cy.get("[data-testid='cell_2|1']").click();
    cy.wait(500);
    cy.get("[data-testid='cell_2|2']").click();
    cy.wait(500);
    cy.get("[data-testid='cell_0|1']").click();
    cy.get("[data-testid=win-message]").contains("wins the game");
  });
});
