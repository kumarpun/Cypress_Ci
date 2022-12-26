/// <reference path='../../support/index.d.ts' />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage, HomePage, RegisterPage } from "../pages/Page";
import Helper from "../helpers/helper";

Given(
  "user {string} has been created with unique username",
  (username: String) => {
    RegisterPage.selectSignUpButton();

    const signupData = Helper.getUniqueCredentials(username);
    enterEmailAndPassword(signupData["emailAddress"], signupData["password"]);
    Helper.addUserToCreatedList(username, signupData);
    RegisterPage.selectSignUpButton();
    RegisterPage.checkVisibilityOfVerificationLink();
  }
);

Given("user has browsed to the login page", () => {
  LoginPage.visit();
  LoginPage.selectLoginOrRegisterButton();
});


Given("user has browsed to the Enthuziastic website", () => {
  LoginPage.visit();
});

Given("user {string} has logged in using webUI", (username: String) => {
  const loginData = Helper.getLoginData(username);

  LoginPage.enterEmailAndPassword(loginData.emailAddress, loginData.password);
  LoginPage.submitLoginCredentials();
  HomePage.checkAvatarVisibility();
});

Given("user {string} login from pop up", (username: String) => {
  const loginData = Helper.getLoginData(username);

  LoginPage.inputEmailAndPassword(loginData.emailAddress, loginData.password);
  LoginPage.loginCredentials();
  HomePage.checkAvatarVisibility();
});

When("user selects the login or register button", () => {
  LoginPage.selectLoginOrRegisterButton();
});

When(
  "the user enters the email {string} and password {string}",
  (email: String, password: String) => {
    enterEmailAndPassword(email, password);
  }
);

function enterEmailAndPassword(email: any, password: any) {
  if (email == "%unique_email%" && password == "%common_password%") {
    const loginData = LoginPage.getRandomEmail();
    email = loginData.email;
    password = loginData.password;
  }
  LoginPage.enterEmailAndPassword(email, password);
}

When("the user tries to log in to the system", () => {
  LoginPage.submitLoginCredentials();
});

Then("the user should be logged in to the enthuziastic system", () => {
  HomePage.checkAvatarVisibility();
});

Then("the user should not be logged in to the enthuziastic system", () => {
  LoginPage.checkLoginButtonVisibility();
});

Then("the user should get incorrect username or password error message", () => {
  LoginPage.checkIncorrectUserCredentialsMessage();
});
