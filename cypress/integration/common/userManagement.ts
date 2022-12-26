import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { UserManagementPage } from "../pages/Page";

When("the user select user managment option from dropdown", () => {
  UserManagementPage.selectUserManagment();
});

When("the admin search user", () => {
  UserManagementPage.searchUser();
});

When("the admin select searched user", () => {
  UserManagementPage.selectUser();
});

When("the admin validates user profile visibility", () => {
  UserManagementPage.userProfileVisibility();
});

When("the admin select add module access button", () => {
  UserManagementPage.selectAddModuleButton();
});

When("the admin select add button", () => {
  UserManagementPage.selectAddButton();
});

When("the user select course operation delete icon", () => {
  UserManagementPage.selectDeleteIcon();
});

When("the admin select customer support module", () => {
  UserManagementPage.selectCustomerSupportModule();
});

When("the admin select admin role", () => {
  UserManagementPage.selectAdminRole();
});

When("the admin select sales operation module", () => {
  UserManagementPage.selectSalesOperationModule();
});

When("the admin select sales support module", () => {
  UserManagementPage.selectSalesSupportModule();
});

When("the admin select user management module", () => {
  UserManagementPage.selectUserManagementModule();
});

Then("the user management data should be visible", () => {
  UserManagementPage.userManagementTableVisibility();
});

Then("the course operation with viewer role should be added", () => {
  UserManagementPage.courseOperationsAddedVisibility();
});

Then("the module added should be deleted", () => {
  UserManagementPage.deleteVisibility();
});

Then("the customer support with admin role should be added", () => {
  UserManagementPage.customerSupportAddedVisibility();
});

Then("the sales operation with admin role should be added", () => {
  UserManagementPage.salesOperationAddedVisibility();
});

Then("the sales support with viewer role should be added", () => {
  UserManagementPage.salesSupportAddedVisibility();
});

Then("the user management with admin role should be added", () => {
  UserManagementPage.userManagementAddedVisibility();
});
