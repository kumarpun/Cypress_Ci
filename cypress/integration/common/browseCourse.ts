import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { BrowseCoursePage } from "../pages/Page";

When("the user select browse course menu", () => {
  BrowseCoursePage.browseCourseText();
});

When("the user select particular course", () => {
  BrowseCoursePage.selectCourse();
});

When("the user select edit title button", () => {
  BrowseCoursePage.editTitleButton();
});

When("the user add new course title name", () => {
  BrowseCoursePage.editTitle();
});

When("the user click save button", () => {
  BrowseCoursePage.saveButton();
});

Then("the list of courses should be display", () => {
  BrowseCoursePage.pricingText();
});

Then("the new course title should be saved", () => {
  BrowseCoursePage.courseTitleVisibility();
});

When("the user select slugs menu", () => {
  BrowseCoursePage.selectSlugs();
});

When("the user enter slug name", () => {
  BrowseCoursePage.enterSlugName();
});

When("the user click add button", () => {
  BrowseCoursePage.selectAddButton();
});

Then("the slug should be added", () => {
  BrowseCoursePage.slugAddSuccess();
});

When("the user select FAQ tab", () => {
  BrowseCoursePage.selectFaq();
});

When("the user enter FAQ question and answer", () => {
  BrowseCoursePage.addFAQ();
});

When("the user submit FAQ", () => {
  BrowseCoursePage.submitFAQ();
});

Then("the FAQ should be added", () => {
  BrowseCoursePage.FaqSuccess();
});

When("the user seletc delete faq icon", () => {
  BrowseCoursePage.selectDeleteIcon();
});

When("the user confirm delete", () => {
  BrowseCoursePage.confirmDelete();
});

Then("the faq get deleted", () => {
  BrowseCoursePage.faqDeleteSuccess();
});

When("the user select pricing tab", () => {
  BrowseCoursePage.selectPricingTab();
});

When("the user add pricing", () => {
  BrowseCoursePage.addPricing();
});

When("the user tap save button", () => {
  BrowseCoursePage.clickSaveButton();
});

Then("the pricing added successfully", () => {
  BrowseCoursePage.pricingSuccess();
});