/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPagePOM";
const userData = require("../fixtures/user.json");
describe("Login", () => {
  it("successful login", () => {
    cy.visit("/login");
    loginPage.mainHeader.should(
      "have.text",
      "Log in with your existing account"
    );
    loginPage.email.type(userData.userEmail);
    loginPage.email.should("have.value", userData.userEmail);
    loginPage.password.type(userData.password);
    loginPage.password.should("have.value", userData.password);
    loginPage.submitBtn.click();
    cy.url().should(
      "eq",
      "https://cypress.vivifyscrum-stage.com/my-organizations"
    );
    loginPage.mainHeader.should("not.exist");
    cy.contains("Add new").click();
    cy.get("input").type("Tvrtka");
    cy.get('[name="next_btn"]').click();
    cy.get(".el-upload-dragger > .vs-c-btn").click();
    cy.get("button[name='next_btn']");
    cy.get('[name="next_btn"]').click();
    cy.get(".vs-c-modal--features-button > .vs-c-btn").click;
  });
  it.only("Login Via API", () => {
    cy.request({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
      body: {
        email: "mtmtemerin+@gmail.com",
        password: "milanlenovotintor",
        "g-recaptcha-response": "",
      },
    }).then((response) => {
      expect(response.status).eq(200);
    });
  });
});
