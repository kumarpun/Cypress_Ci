export class StaffLoginPage {
  emailInputXpath = "//input[@placeholder='Email']";
  passwordInputXpath = "//input[@placeholder='Password']";
  loginButtonXpath = "//button[.='Log In']";
  okButtonXpath = "//button[.='OK']";

  visit() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    return cy.visit("/");
  }

  enterEmailAndPassword(email, password) {
    cy.xpath(this.emailInputXpath).type(email);
    cy.xpath(this.passwordInputXpath).type(password);
  }

  login() {
    cy.xpath(this.loginButtonXpath).click();
  }

  okButtonVisibility() {
    cy.wait(4000);
    cy.xpath(this.okButtonXpath).click();
  }
}
