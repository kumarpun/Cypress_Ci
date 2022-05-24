export class StudentLoginPage {
  inputSchoolNameXpath = "//div[.='School Name']";
  selectSchoolXpath = "//li[contains(text(),'Production Test')]";
  inputGroupXpath = "//div[contains(text(),'Select Group')]";
  selectGroupXpath = "//li[contains(text(),'Class A')]";
  inputUsernameXpath = "//input[@placeholder='Username']";
  inputPasswordXpath = "//input[@placeholder='Password']";
  loginButtonxpath = "//button[.='LOG IN']";
  postButtonxpath = "//button[contains(text(),'POST')]";

  enterLoginDetails(schoolName, username, password) {
    cy.xpath(this.inputSchoolNameXpath).type(schoolName);
    cy.wait(1000);
    cy.xpath(this.selectSchoolXpath).click();
    cy.xpath(this.inputGroupXpath).click();
    cy.xpath(this.selectGroupXpath).click();
    cy.xpath(this.inputUsernameXpath).type(username);
    cy.xpath(this.inputPasswordXpath).type(password);
    cy.xpath(this.loginButtonxpath).click();
  }

  enterSchoolName(schoolName) {
    cy.xpath(this.inputSchoolNameXpath).type(schoolName);
    cy.wait(1000);
    cy.xpath(this.selectSchoolXpath).click();
  }

  selectGroup() {
    cy.xpath(this.inputGroupXpath).click();
    cy.xpath(this.selectGroupXpath).click();
  }

  enterEmailAndPassword(username, password) {
    cy.xpath(this.inputUsernameXpath).type(username);
    cy.xpath(this.inputPasswordXpath).type(password);
  }

  selectLoginButton() {
    cy.xpath(this.loginButtonxpath).click();
  }

  postButtonVisibility() {
    cy.xpath(this.postButtonxpath).should("be.visible"); 
  }
}