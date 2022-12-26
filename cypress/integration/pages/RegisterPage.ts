class RegisterPage {
  signUpButtonXpath = '//button[.="Sign up"]';
  sendVerificationLinkXpath = '//button[.="Resend verification link"]';

  selectSignUpButton() {
    return cy.xpath(this.signUpButtonXpath).click();
  }

  checkVisibilityOfVerificationLink() {
    cy.xpath(this.sendVerificationLinkXpath).should("be.visible");
  }
}

export default new RegisterPage();
