class AdminLoginPage {
  emailInputXpath = "//input[@placeholder='Write your email']";
  passwprdInputXpath = "//input[@placeholder='Write your password']";
  loginButtonXpath = "//button[.='Login']";
  createTopicMenuXpath = "//p[.='Create Topic']";

  visit() {
    cy.visit(Cypress.config("adminUrl"));
  }

  enterAdminEmailAndPassword(email, password) {
    cy.xpath(this.emailInputXpath).type(email);
    cy.xpath(this.passwprdInputXpath).type(password);
  }

  loginButton() {
    cy.xpath(this.loginButtonXpath).click();
  }

  createTopicMenu() {
    cy.xpath(this.createTopicMenuXpath).should("be.visible");
  }

  selectTopicMenu() {
    cy.wait(8000);
    cy.xpath(this.createTopicMenuXpath).click();
  }
}

export default new AdminLoginPage();
