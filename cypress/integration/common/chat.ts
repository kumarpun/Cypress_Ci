import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { ChatPage } from "../pages/Page";

When("the user select chat navbar", () => {
  ChatPage.selectChatNav();
});

Then("the chat page should be display", () => {
  ChatPage.searchChatVisibility();
});

When("the user enter text in chat input area", () => {
  ChatPage.inputChat();
});

When("the user select send message button", () => {
  ChatPage.sendMessage();
});

Then("the text message should be sent", () => {
  ChatPage.messageSentVisibility();
});

When("the user type course name on search area", () => {
  ChatPage.searchChat();
});

Then("the searched chat should be display", () => {
  ChatPage.searchedChatVisibility();
});

When("the user select searched chat id", () => {
  ChatPage.selectSearchedChat();
});

When("the user enter bold text in chat input area", () => {
  ChatPage.inputChatFormat();
});

When("the user enter itallic text in chat input area", () => {
  ChatPage.inputIttalicFormat();
});
