import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select chat zone menu", () => {
    app.staffChat.selectChatZoneMenu();
});

When("the user select action icon on group chat row", () => {
    app.staffChat.selectGroupChatRowAction();
});

When("the user select info icon", () => {
    app.staffChat.selectInfoIcon();
});

When("the user select individual chat button", () => {
    app.staffChat.selectIndividualChatButton();
});

When("the user click action icon on individual chat row", () => {
    app.staffChat.selectIndividualChatRowAction();
});

When("the user click info icon", () => {
    app.staffChat.selectIndividualInfoIcon();
});

When("the user select view by student button", () => {
    app.staffChat.selectViewByStudentButton();
});

When("the user select action icon on view by student row", () => {
    app.staffChat.selectViewByStudentRowActionIcon();
});

Then("the user validates chat zone page visibility", () => {
    app.staffChat.chatZoneTitleVisibility();
});

Then("the user validates group chat detail page visibility", () => {
    app.staffChat.groupChatDetailPageVisibility();
});

Then("the chat summary should be visible", () => {
    app.staffChat.chatSummaryVisibility();
});

Then("the user validates individual chat page visibility", () => {
    app.staffChat.individualChatRowActionVisibility();
});

Then("the individual chat detail page should be visible", () => {
    app.staffChat.individualChatInfoSelectorVisibility();
});

Then("the user validates view by student page visibility", () => {
    app.staffChat.viewByStudentRowActionVisibility();
});

Then("the view by student chat detail page should be visible", () => {
    app.staffChat.individualChatInfoSelectorVisibility();
});