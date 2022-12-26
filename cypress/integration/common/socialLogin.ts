import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { SocialLoginPage } from "../pages/Page";

When("user has browsed to the google login page", () => {
    SocialLoginPage.visitGoogleLoginPage();
});