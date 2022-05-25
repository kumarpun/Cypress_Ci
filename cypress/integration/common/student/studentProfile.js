import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select own avatar image", () => {
    app.studentProfile.selectAvatarLink();
});

Then("the user should redirected to profile page", () => {
    app.studentProfile.profileVisibility();
});
