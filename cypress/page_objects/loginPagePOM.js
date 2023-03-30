class LoginPage {
  get email() {
    return cy.get("input[type='email']");
  }
  get password() {
    return cy.get("input[type='password']");
  }
  get submitBtn() {
    return cy.get("button[type='submit']");
  }
  get mainHeader() {
    return cy.get("h1");
  }
}

export const loginPage = new LoginPage();
