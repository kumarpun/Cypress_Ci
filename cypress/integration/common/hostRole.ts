import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { HostRolePage } from "../pages/Page";

When("the user select course detail button in host feature session", () => {
  HostRolePage.CourseDetailButton();
});

When("the user select setting icon in title", () => {
  HostRolePage.titleSettingVisibility();
});

When("the user enter tag in tag area", () => {
  HostRolePage.inputTag();
});

When("the user select save course button", () => {
  HostRolePage.saveCourseButton();
});

When("the user select cancel icon in tag", () => {
  HostRolePage.removeTag();
});

Then("the host feature session should be present", () => {
  HostRolePage.checkHostSessionVisibility();
});

Then("the session details should be present", () => {
  HostRolePage.checkCourseTitleVisibility();
});

Then("the tag added should be visible", () => {
  HostRolePage.tagVisibility();
});

Then("the tag should be remove from course", () => {
  HostRolePage.inputTagVisibility();
});
