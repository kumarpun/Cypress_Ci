/// <reference types="cypress-xpath" />

require("cypress-xpath");
import getUserDataFromFixture from "../../fixtures/password.json";

class LoginPage {
  loginORRegisterButtonXpath = '//button[.="Login / Register"]';
  emailInputSelector = 'input[name="email"]';
  passwordInputSelector = 'input[name="password"]';
  loginFormSubmitButtonSelector = 'button[type="submit"]';
  cookieAcceptText = "Accept";
  usernameAndPasswordIncorrectText = "Username or password incorrect";
  loginButtonXpath = '//button[.="Login"]';

  visit() {
    return cy.visit("/").then(() => {
      this.waitForLoginPageToLoad();
      this.acceptCookies();
    });
  }

  waitForLoginPageToLoad() {
    return cy.xpath(this.loginORRegisterButtonXpath);
  }

  acceptCookies() {
    return cy.xpath("//button[.='Accept']").click();
  }

  selectLoginOrRegisterButton() {
    cy.xpath(this.loginORRegisterButtonXpath).click({ force: true });
  }

  enterEmailAndPassword(email, password) {
    if (email != "") {
      cy.get(this.emailInputSelector).type(email);
    }
    if (password != "") {
      cy.get(this.passwordInputSelector).type(password);
    }
  }

  inputEmailAndPassword(email, password) {
    if (email != "") {
      cy.get(this.emailInputSelector).eq(1).type(email);
    }
    if (password != "") {
      cy.get(this.passwordInputSelector).eq(1).type(password);
    }
  }

  loginCredentials() {
    cy.get(this.loginFormSubmitButtonSelector).eq(1).click();
  }

  submitLoginCredentials() {
    cy.get(this.loginFormSubmitButtonSelector).click();
  }

  checkIncorrectUserCredentialsMessage() {
    return cy.contains(this.usernameAndPasswordIncorrectText);
  }

  checkLoginButtonVisibility() {
    cy.xpath(this.loginButtonXpath).should("be.visible");
  }

  getRandomEmail() {
    //generate random sequence of number up to 1 * 10 ^ 6
    const randomNumberGenerator = () => Cypress._.random(0, 1e6);
    const randomNumber = randomNumberGenerator();
    const randomEmail = randomNumber + getUserDataFromFixture["Enthu"].email;

    return {
      email: randomEmail,
      password: getUserDataFromFixture["Enthu"].password,
    };
  }
}
export default new LoginPage();
