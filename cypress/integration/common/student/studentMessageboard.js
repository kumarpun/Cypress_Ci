import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";
import { Helper } from "../../helpers/helper";

const app = new AppPage();
let helper = new Helper();

When("the user select text area", () => {
    app.messageboard.selectTextArea();
});

When("the user type text on text area", () => {
    app.messageboard.typeText();
});

Then("the text post should be posted", () => {
    app.messageboard.textPostsuccess();
});