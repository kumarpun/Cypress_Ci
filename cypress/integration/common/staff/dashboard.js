import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";
import { Helper } from "../../helpers/helper";

let app = new AppPage();
let helper = new Helper();

When("user {string} has logged in to the system", (username) => {
  const loginData = helper.getLoginData(username);

  app.login.enterEmailAndPassword(loginData.email, loginData.password);
});

When("the user select award DiGiiTs button", () => {
  app.dashboard.awardDiGiiTs();
});

When("the user select student", () => {
  app.dashboard.selectStudent();
});

When("the user select digiits", () => {
  app.dashboard.selectDiGiiTs();
});

When("the user enter reason", () => {
  app.dashboard.enterReason();
});

When("the user select award button", () => {
  app.dashboard.awardButton();
});

When("the user select award merit certificate button", () => {
  app.dashboard.awardMeritCertificate();
});

When("the user select merit certificate silvers", () => {
  app.dashboard.selectCertificate();
});

Then("the dashboard data should be display", () => {
  app.dashboard.dashboardTitleVisisbility();
});

Then("the digiit should be awarded successfully", () => {
  app.dashboard.digiitSuccessMessage();
});

Then("the certificate should be awarded successfully", () => {
  app.dashboard.certificateSuccessMessage();
});
