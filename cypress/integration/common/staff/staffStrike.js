import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select strike menu", () => {
    app.strike.selectStrikeMenu();
});

When("the strike page should be visible", () => {
    app.strike.DisputeTabVisibility();
});