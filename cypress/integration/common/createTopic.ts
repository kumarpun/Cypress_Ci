import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { CreateTopicPage, AdminLoginPage } from "../pages/Page";

When("the user select create topic menu", () => {
  AdminLoginPage.selectTopicMenu();
});

When("the user select plus icon to create topic", () => {
  CreateTopicPage.selectPlusIcon();
});

When("ther user enter topic title that need to be added", () => {
  CreateTopicPage.inputTopicTitle();
});

When("the user select level", () => {
  CreateTopicPage.selectLevel();
});

When("ther user enter topic duration", () => {
  CreateTopicPage.enterDuration();
});

When("the user enter topic description", () => {
  CreateTopicPage.enterDescription();
});

When("the user select add topic button", () => {
  CreateTopicPage.addTopicButton();
});

When("the user select delete icon from any one topic", () => {
  CreateTopicPage.selectDeleteIcon();
});

When("the user enter topic name to delete", () => {
  CreateTopicPage.enterTopicNameToDelete();
});

When("the user select delete topic button", () => {
  CreateTopicPage.deleteTopicButton();
});

When("the user select info icon", () => {
  CreateTopicPage.selectInfoIcon();
});

When("the user select editing locked button", () => {
  CreateTopicPage.editingLockedButton();
});

When("the user update topic description", () => {
  CreateTopicPage.updateDescription();
});

When("the user update topic duration {string}", (duration) => {
  CreateTopicPage.updateDuration(duration);
});

When("the user select update topic button", () => {
  CreateTopicPage.updateTopicButton();
});

When("the user search topic", () => {
  CreateTopicPage.searchTopic();
});

When("the user select searched topic", () => {
  CreateTopicPage.selectSearchedTopic();
});

Then("the searched topic result should be visible", () => {
  CreateTopicPage.searchedTopicResult();
});

Then("the topic details should be display", () => {
  CreateTopicPage.topicDetailvisibility();
});

Then("the new topic added should be visible", () => {
  CreateTopicPage.topicAddedVisibility();
});

Then("the selected topic should be deleted", () => {
  CreateTopicPage.gradeOneCategoryVisibility();
});
