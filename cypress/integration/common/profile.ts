import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { preProcessFile } from "../../../node_modules/typescript/lib/typescript";
import { ProfilePage } from "../pages/Page";

When("the user select avatar", () => {
  ProfilePage.selectAvatar();
});

When("the user select my profile option", () => {
  ProfilePage.selectMyProfile();
});

When("the user type on bio field", () => {
  ProfilePage.inputBio();
});

When("the user select save changes button", () => {
  ProfilePage.saveButton();
});

When("the user type new name", () => {
  ProfilePage.inputName();
});

When("the user upload new image", () => {
  ProfilePage.uploadPhoto();
});

When("the user select change password tab", () => {
  ProfilePage.selectChangePasswordTab();
});

When("the user enter current password", () => {
  ProfilePage.inputCurrentPassword();
});

When("the user enter new password", () => {
  ProfilePage.inputNewPassword();
});

When("the user enter confirm password", () => {
  ProfilePage.inputConfirmPassword();
});

When("the user select update password button", () => {
  ProfilePage.updatePassword();
});

Then("the profile page should be visible", () => {
  ProfilePage.profileVisibility();
});

Then("the bio should be saved", () => {
  ProfilePage.bioVisibility();
});

Then("the name should be saved", () => {
  ProfilePage.nameVisibility();
});

Then("the image should be saved", () => {
  ProfilePage.profilePicVisibility();
});

Then("the password should be changed", () => {
  ProfilePage.passwordSuccess();
});
