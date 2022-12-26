import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AdminLoginPage } from "../pages/Page";
import Helper from "../helpers/helper";

When("user has browsed to the admin login page", () => {
  AdminLoginPage.visit();
});

When("user {string} has logged in using adminUI", (username: String) => {
  const loginData = Helper.getLoginData(username);

  AdminLoginPage.enterAdminEmailAndPassword(
    loginData.emailAddress,
    loginData.password
  );
});

When("the user select login button", () => {
  AdminLoginPage.loginButton();
});

Then("the user should be logged in to the admin system", () => {
  AdminLoginPage.createTopicMenu();
});
