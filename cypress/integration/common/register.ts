import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { RegisterPage } from "../pages/Page";

When("the user selects the sign up button", () => {
  RegisterPage.selectSignUpButton();
});

When("the user tries to register in to the system", () => {
  RegisterPage.selectSignUpButton();
});

Then("the user should be registered in to the system", () => {
  RegisterPage.checkVisibilityOfVerificationLink();
});
