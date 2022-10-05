/// <reference types="cypress" />

context("Tic Tac Toe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000");
  });

  it("has headline", () => {
    cy.get("[data-testid='headline']").should("contain", "My Search Component");
  });
});
