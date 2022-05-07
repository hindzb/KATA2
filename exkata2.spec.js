/// <reference types="cypress" />

describe("suite de test kata 2 ", () => {
  it("scenario 1 cree un utilisateur ", function () {
    cy.visit("https://www.demoblaze.com/");
    cy.fixture("kata2");
    cy.get("#signin2").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("#sign-username").type("hindzaouche");
    cy.get("#sign-password").type("azerty");
    cy.get('[class="btn btn-secondary"]').eq(1).click();
  });
  it("scenario 2 se conecter ", function () {
    cy.get("#login2").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("#loginusername").type("hindzaouche");
    cy.get("#loginusername").should("be.visible");
    cy.get("#loginpassword").type("azerty");
    cy.get("#loginpassword").should("be.visible");
    cy.get('[class="btn btn-secondary"]').eq(2).click();
  });
  it("scenario 3 ajouter au panier", function () {
    cy.get(".hrefch").contains("Nokia lumia 1520").click();
    cy.get('[class="btn btn-success btn-lg"]')
      .should("include.text", "Add to cart")
      .click();
    cy.on("window:alert", (Text) => {
      expect(Text).contain("Product added");
    });
    cy.on("window:confirm", () => true);
  });
  it("scenario 4 confirmer et valider le paiement", function () {
    cy.get('[class="nav-link"]').contains("Cart").click();
    cy.get('[class="btn btn-success"]')
      .should("include.text", "Place Order")
      .click();
    cy.get("#name").type("hind");
    cy.get("#name").should("be.visible");
    cy.get("#country").type("France");
    cy.get("#country").should("be.visible");
    cy.get("#city").type("paris");
    cy.get("#city").should("be.visible");
    cy.get("#card").type("234432");
    cy.get("#card").should("be.visible");
    cy.get("#month").type("juin");
    cy.get("#month").should("be.visible");
    cy.get("#year").type("2025");
    cy.get("#year").should("be.visible");
    cy.get('[class="btn btn-primary"]').contains("Purchase").click();
    cy.get('[class="sweet-alert  showSweetAlert visible"]').should(
      "be.visible"
    );
    cy.get('[class="confirm btn btn-lg btn-primary"]').contains("OK").click();
  });
});
