export class DashboardPage {
  dashboardTitle = "Dashboard";
  awardDiGiiTsXpath = "//span[.='DiGiiTs Awarded']";
  studentDropdownXpath = "//span[.='Select a student']";
  selectStudentXpath = "//div[.='Kumar']";
  digiitsDropdownXpath = "//span[.='Select DiGiiTs']";
  selectDiGiiTsXpath = "//div[.='10']";
  reason = "[name='reason']";
  awardButtonXpath = "//button[.='Award']";
  digiitSuccessMessagexpath =
    "//div[.='Success! The DiGiiTs have been awarded.']";
  awardMeritCertificateXpath = "//span[.='Merit Certificates Awarded']";
  certificateDropdownXpath = "//span[.='Select Certificate']";
  selectSilverCertificateXpath = "//div[.='Merit Certificate Silvers']";
  cetificateSuccessMessageXpath =
    "//div[.='The Merit Certificate has been awarded.']";

  dashboardTitleVisisbility() {
    cy.contains(this.dashboardTitle).should("be.visible");
  }

  awardDiGiiTs() {
    cy.xpath(this.awardDiGiiTsXpath).click();
  }

  selectStudent() {
    cy.xpath(this.studentDropdownXpath).click({ force: true });
    cy.xpath(this.selectStudentXpath).click({ multiple: true, force: true });
  }

  selectDiGiiTs() {
    cy.xpath(this.digiitsDropdownXpath).click({ force: true });
    cy.xpath(this.selectDiGiiTsXpath).click({ multiple: true, force: true });
  }

  enterReason() {
    cy.get(this.reason).type("test digiits reason");
  }

  awardButton() {
    cy.xpath(this.awardButtonXpath).click();
  }

  digiitSuccessMessage() {
    cy.xpath(this.digiitSuccessMessagexpath).should("be.visible");
  }

  awardMeritCertificate() {
    cy.xpath(this.awardMeritCertificateXpath).click();
  }

  selectCertificate() {
    cy.xpath(this.certificateDropdownXpath).click({ force: true });
    cy.xpath(this.selectSilverCertificateXpath).click({
      multiple: true,
      force: true,
    });
  }

  certificateSuccessMessage() {
    cy.xpath(this.cetificateSuccessMessageXpath).should("be.visible");
  }
}
