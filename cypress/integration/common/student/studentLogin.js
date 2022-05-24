import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";
import { Helper } from "../../helpers/helper";

const app = new AppPage();
let helper = new Helper();

When("the user {string} enter school name", (username) => {
    const loginData = helper.getLoginData(username);

    app.studentLogin.enterSchoolName(loginData.schoolName);
});

When("the user select group", () => {
    app.studentLogin.selectGroup();
});

When("the user {string} enter email and password", (username) => {
    const loginData = helper.getLoginData(username);

    app.studentLogin.enterEmailAndPassword(loginData.username, loginData.password);
});

When("the user select class login button", () => {
    app.studentLogin.selectLoginButton();
});

Then("the student should be login successfully", () => {
    app.studentLogin.postButtonVisibility();
});