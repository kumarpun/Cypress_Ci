import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { SearchCoursePage } from "../pages/Page";

When("user selects the courses link", () => {
  SearchCoursePage.selectCoursesLink();
});

When("the user enters the course {string}", (course) => {
  SearchCoursePage.enterCourseName(course);
});

When("the user select search icon", () => {
  SearchCoursePage.selectSearchIcon();
});

When("the user select test course link", () => {
  SearchCoursePage.selectTestCourse();
});

Then("the searched course should be display", () => {
  SearchCoursePage.checkCourseVisibility();
});

Then("the course detail should be display", () => {
  SearchCoursePage.checkCourseDetails();
});
