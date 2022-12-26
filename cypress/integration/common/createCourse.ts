import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { CreateCoursePage } from "../pages/Page";

When("the user select create course menu", () => {
  CreateCoursePage.createCourseMenu();
});

When("the user search and select grade one category", () => {
  CreateCoursePage.selectGradeOneCategory();
});

When("the user enter course title {string}", (courseTitle: String) => {
  CreateCoursePage.inputCourseTitle(courseTitle);
});

When("the user select age group", () => {
  CreateCoursePage.selectAgeGroup();
});

When("the user select topic", () => {
  CreateCoursePage.selectTopic();
});

When("the user select save button", () => {
  CreateCoursePage.saveButton();
});

Then("the course should be created", () => {
  CreateCoursePage.searchCategoryVisibility();
});

When("the user select course menu", () => {
  CreateCoursePage.selectCourseMenu();
});

When("the user select add course button", () => {
  CreateCoursePage.selectAddCourse();
});

When("the user input course name", () => {
  CreateCoursePage.inputCourseName();
});

Then("the course should be successfully created", () => {
  CreateCoursePage.courseCreateSuccess();
});

When("the user search course", () => {
  CreateCoursePage.searchCourse();
});

Then("the course should be display", () => {
  CreateCoursePage.courseVisibility();
});
