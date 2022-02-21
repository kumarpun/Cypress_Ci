export class StudentHelpRequestPage {
  inputSchoolNameXpath = "//div[.='School Name']";
  selectSchoolXpath = "//li[contains(text(),'Production Test')]";
  inputGroupXpath = "//div[contains(text(),'Select Group')]";
  selectGroupXpath = "//li[contains(text(),'Class A')]";
  inputUsernameXpath = "//input[@placeholder='Username']";
  inputPasswordXpath = "//input[@placeholder='Password']";
  loginButtonxpath = "//button[.='LOG IN']";
  needHelpButtonXpath =
    "//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/button[1]";
  insideSchoolHelpXpath = "//button[.='Inside our school']";
  meButtonXpath = "//button[.='Me']";
  rightNowHelpXpath = "//button[.='Right now']";
  okButtonXpath = "//button[.='OK']";

  visit() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.config("classUrl"));
    cy.clearLocalStorage();
  }

  selectSchool() {
    cy.xpath(this.inputSchoolNameXpath).click();
  }

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

  needHelpButton() {
    cy.wait(1000);
    cy.xpath(this.needHelpButtonXpath).click();
  }

  insideSchoolHelp() {
    cy.xpath(this.insideSchoolHelpXpath).click();
  }

  requestHelpForMyself() {
    cy.xpath(this.meButtonXpath).click();
    cy.xpath(this.rightNowHelpXpath).click();
    cy.xpath(this.okButtonXpath).click();
  }
}
