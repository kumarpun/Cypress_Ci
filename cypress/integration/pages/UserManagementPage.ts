class UserManagementPage {
  dropDownXpath = "[name='modules']";
  userManagementTitleXpath = "//h4[.='User Management ']";
  nameXpath = "//div[3]/div/span[. = 'Name']";
  filterXpath = "//span[. = 'Filters']";
  searchUserXpath = "//div[1]/div/div[2]/div/input[@placeholder = 'Search...']";
  selectNameXpath = "//span[3][. = 'Email']";
  requiredUserXpath = "//span[. = 'cumarpun12345@gmail.com']";
  addModuleButtonXpath = "//button[. = 'Add Module Access']";
  addButtonXpath = "//button[. = 'Add']";
  courseOperationsAddedVisibilityXpath = "//div[. = 'Course Operations']";
  deleteIconXpath =
    "//body/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/img[2]";
  deleteVisibilityXpath =
    "//body/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[2]/div[3]";
  moduleSelector = "[name='module']";
  adminRoleSelector = "[name='role']";
  customerSupportAddedXpath = "//div[. = 'Customer Support']";
  salesOperationAddedXpath = "//div[. = 'Sales Operations']";
  salesSupportAddedXpath = "//div[. = 'Sales Support']";
  userManagementAddedXpath = "//div[. = 'User Management']";

  selectUserManagment() {
    cy.wait(5000);
    cy.get(this.dropDownXpath).select("User Management", { force: true });
  }

  userManagementTableVisibility() {
    cy.wait(8000);
    cy.xpath(this.nameXpath).should("be.visible");
    cy.xpath(this.filterXpath).should("be.visible");
  }

  searchUser() {
    cy.wait(8000);
    cy.xpath(this.filterXpath).click();
    cy.xpath(this.selectNameXpath).click();
    cy.xpath(this.searchUserXpath).type("cumarpun12345@gmail.com");
    cy.xpath(this.searchUserXpath).type("{enter}");
  }

  selectUser() {
    cy.xpath(this.requiredUserXpath).click();
  }

  userProfileVisibility() {
    cy.xpath(this.addModuleButtonXpath).should("be.visible");
  }

  selectAddModuleButton() {
    cy.xpath(this.addModuleButtonXpath).click();
  }

  selectAddButton() {
    cy.xpath(this.addButtonXpath).click();
  }

  courseOperationsAddedVisibility() {
    cy.xpath(this.courseOperationsAddedVisibilityXpath).should("be.visible");
  }

  selectDeleteIcon() {
    cy.xpath(this.deleteIconXpath).click();
  }

  deleteVisibility() {
    cy.xpath(this.deleteVisibilityXpath).should("be.visible");
  }

  selectCustomerSupportModule() {
    cy.get(this.moduleSelector).select("Customer Support");
  }

  selectAdminRole() {
    cy.get(this.adminRoleSelector).select("Admin");
  }

  customerSupportAddedVisibility() {
    cy.xpath(this.customerSupportAddedXpath).should("be.visible");
  }

  selectSalesOperationModule() {
    cy.get(this.moduleSelector).select("Sales Operations");
  }

  salesOperationAddedVisibility() {
    cy.xpath(this.salesOperationAddedXpath).should("be.visible");
  }

  selectSalesSupportModule() {
    cy.get(this.moduleSelector).select("Sales Support");
  }

  salesSupportAddedVisibility() {
    cy.xpath(this.salesSupportAddedXpath).should("be.visible");
  }

  selectUserManagementModule() {
    cy.get(this.moduleSelector).select("User Management");
  }

  userManagementAddedVisibility() {
    cy.xpath(this.userManagementAddedXpath).should("be.visible");
  }
}

export default new UserManagementPage();
