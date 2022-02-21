import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select help request menu", () => {
  app.helpRequest.helpRequestMenu();
});

When("the user select accept button on recent help request", () => {
  app.helpRequest.acceptHelp();
});

When("the user select chat message approach", () => {
  app.helpRequest.chatMessage();
});

When("the user enter messages in text area", () => {
  cy.reload();
  app.helpRequest.enterMessage();
});

When("the user select send icon in the text area", () => {
  app.helpRequest.sendMessage();
});

When("the user select complete icon on recent help request accepted", () => {
  app.helpRequest.completeIcon();
});

When("the user enter complete reason", () => {
  app.helpRequest.enterCompleteReason();
});

When("the user select complete button", () => {
  app.helpRequest.completeButton();
});

Then("the help request page should be display", () => {
  app.helpRequest.helpRequestTitleVisibility();
});

Then("the message should be sent", () => {
  app.helpRequest.messageVisibility();
});

Then("the help request should be completed", () => {
  app.helpRequest.validateHelpRequestComplete();
});
