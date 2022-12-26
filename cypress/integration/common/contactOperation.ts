import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { ContactOperationPage } from "../pages/Page";

When("the user select contact operation option from the dropdown", () => {
  ContactOperationPage.selectContactOperation();
});

When("the user select contact group row", () => {
  ContactOperationPage.selectFirstRow();
});

When("the user select edit mode button", () => {
  ContactOperationPage.selectEditMode();
});

When("the user enter group name", () => {
  ContactOperationPage.enterName();
});

Then("the contact group should be updated", () => {
  ContactOperationPage.updateSuccess();
});

When("the user select contact tab", () => {
  ContactOperationPage.selectContactTab();
});

Then("the contact list should be display", () => {
  ContactOperationPage.contactTableVisibility();
});

When("the user select contact link", () => {
  ContactOperationPage.contactMenu();
});
