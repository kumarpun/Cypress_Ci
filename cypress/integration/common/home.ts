/// <reference path='../../support/index.d.ts' />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../pages/Page";

Given("the user has browsed to the hosting page using webUI", () => {
  HomePage.switchToHosting();
  HomePage.checkCreateSessionButtonVissibility();
});

When("the user opens the {string} creation form", (sessionType) => {
  HomePage.openSingleSessionCreationForm(sessionType);
});

When("the user scroll to explore course button in home page", () => {
  HomePage.scrollToExploreCourseButton();
});

Then("the button should be visible", () => {
  HomePage.exploreButtonVisibility();
});

When("the user select explore course button", () => {
  HomePage.selectExploreCourseButton();
});

Then("the course page should be visible", () => {
  HomePage.searchCourseVisibility();
});

When("the user scroll to bottom of the home page", () => {
  HomePage.scrollToBottom();
});

Then("the footer get visible", () => {
  HomePage.footerVisibilty();
});

When("the user scroll and select teach tab", () => {
  HomePage.selectTeachTab();
});

Then("teach content get display", () => {
  HomePage.teachContentVisibility();
});

When("the user select about us menu", () => {
  HomePage.selectAboutMenu();
});

Then("the about us page get display", () => {
  HomePage.aboutUsPageVisibility();
});
