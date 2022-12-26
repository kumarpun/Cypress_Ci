class ContactOperationPage {
  dropDownXpath = "[name='modules']";

  selectContactOperation() {
    cy.wait(5000);
    cy.get(this.dropDownXpath).select("Contact Operations", { force: true });
  }

  selectFirstRow() {
    cy.xpath("//tbody/tr[1]/td[1]").click();
  }

  selectEditMode() {
    cy.contains("Edit Mode: OFF").click({ force: true });
  }

  enterName() {
    cy.get("[name='name']").clear();
    cy.get("[name='name']").type("Test Group");
  }

  updateSuccess() {
    cy.contains("Contact group updated successfully");
  }

  selectContactTab() {
    cy.wait(3000);
    cy.xpath("//p[contains(text(),'Contacts')]").click();
  }

  contactTableVisibility() {
    cy.contains("Name");
  }

  contactMenu() {
    cy.xpath("//div[contains(text(),'Contacts')]").click();
  }
}

export default new ContactOperationPage();
