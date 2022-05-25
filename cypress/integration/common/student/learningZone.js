import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select learning zone menu", () => {
    app.learningZone.selectLearningZoneMenu();
});

Then("the student should redirect to learning zone page", () => {
    app.learningZone.LearningTutorialVisibility();
});
