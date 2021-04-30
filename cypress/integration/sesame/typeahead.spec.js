import { cyInputBar, cyListSuggestedFruits } from "../../../src/handles/index";

describe("Test for sesame challenge", () => {
  it("Visits the Application page", () => {
    cy.visit("http://localhost:3000");
  });
  it("Types in the input bar component", () => {
    cy.get(`[data-cy=${cyInputBar}]`).type("Pineapple");
  });
  it("Clicks on the suggested fruit", () => {
    cy.get(`[data-cy=${cyListSuggestedFruits}]`).click();
  });
  it("Check to confirm the suggested fruit is in the inputbar", () => {
    cy.get(`[data-cy=${cyInputBar}]`).should("have.length", 1);
  });
});
