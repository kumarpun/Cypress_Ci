import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";
import { Helper } from "../../helpers/helper";

const app = new AppPage();
let helper = new Helper();

Given("user has browsed to the student login page", () => {
  app.studentHelp.visit();
});

When("user {string} has logged in to the class system", (username) => {
  const loginData = helper.getLoginData(username);

  app.studentHelp.enterLoginDetails(
    loginData.schoolName,
    loginData.username,
    loginData.password
  );
});

When("the user select need help button", () => {
  app.studentHelp.needHelpButton();
});

When("the user select inside school help button", () => {
  app.studentHelp.insideSchoolHelp();
});

When("the user request help for himself", () => {
  app.studentHelp.requestHelpForMyself();
});
