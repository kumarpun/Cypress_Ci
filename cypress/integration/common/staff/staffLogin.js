import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

let app = new AppPage();

Given("user has browsed to the login page", () => {
  app.login.visit();
});

When(
  "the user enter email {string} and password {string}",
  (email, password) => {
    app.login.enterEmailAndPassword(email, password);
  }
);

When("the user select login button", () => {
  app.login.login();
});

Then("the user should be login to the system", () => {
  app.login.okButtonVisibility();
});
