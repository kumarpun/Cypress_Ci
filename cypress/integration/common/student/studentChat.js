import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";
import { Helper } from "../../helpers/helper";

const app = new AppPage();
let helper = new Helper();

Then("the chat zone should be visible", () => {
    app.studentChat.groupChatMenuVisibility();
});
