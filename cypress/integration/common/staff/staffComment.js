import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select comment icon", () => {
    app.staffComment.selectCommentIcon();
});

When("the user enter text on comment", () => {
    app.staffComment.enterComment();
});

When("the user select image icon", () => {
    app.staffComment.selectImageIcon();
});

When("the user click post button to comment", () => {
    app.staffComment.postButton();
});

When("the user select emoji icon", () => {
    app.staffComment.selectFeelingIcon();
});

When("the user click emoji", () => {
    app.staffComment.selectEmoji();
});

Then("the text comment should be posted", () => {
    app.staffComment.commentedTextVisibility();
});

Then("the image should be commented", () => {
    app.staffComment.commentImageSuccess();
});

Then("the emoji should be commented", () => {
    app.staffComment.emojiCommentVisibility();
});