import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { BatchManagementPage } from "../pages/Page";

When("the user select Batch Management link", () => {
  BatchManagementPage.selectBatchManagement();
});

When("the user search course {string}", (course) => {
  BatchManagementPage.searchCourse(course);
});

When("the user select batch row", () => {
  BatchManagementPage.selectBatch();
});

When("the admin select add user button", () => {
  BatchManagementPage.selectAdduserButton();
});

When("the admin search and select user", () => {
  BatchManagementPage.searchUser();
});

When("the user select add button", () => {
  BatchManagementPage.addSelectedUser();
});

When("the user select delete button", () => {
  BatchManagementPage.selectDeleteButtonBasedOnUser();
});

When("the user select remove user button", () => {
  BatchManagementPage.selectRemoveButton();
});

Then("the users list display", () => {
  BatchManagementPage.usersListVisibility();
});

Then("the user added successfully", () => {
  BatchManagementPage.addSuccessMessage();
});

Then("the user get removed successfully", () => {
  BatchManagementPage.userRemoveSuccess();
});

When("the user select general tab", () => {
  BatchManagementPage.selectGeneralTab();
});

When("the user select update button", () => {
  BatchManagementPage.selectUpdateButton();
});

When("the user enter course name", () => {
  BatchManagementPage.enterNewCourseName();
});

When("the user click on save button", () => {
  BatchManagementPage.selectSaveButton();
});

Then("the course name should be updated", () => {
  BatchManagementPage.courseSuccess();
});

When("the user select update batch button", () => {
  BatchManagementPage.selectUpdateBatch();
});

When("the user enter new batch name", () => {
  BatchManagementPage.updateBatchName();
});

Then("the batch name get updated", () => {
  BatchManagementPage.batchNameUpdateSuccess();
});

When("the user select feedback menu", () => {
  BatchManagementPage.selectFeedbackMenu();
});

Then("the feedback list should be display", () => {
  BatchManagementPage.sessionVisibility();
});

Then("the expanded feedback should be display", () => {
  BatchManagementPage.expandedSession();
});

When("the user select summary menu", () => {
  BatchManagementPage.selectSummaryMenu();
});

Then("the summary get display", () => {
  BatchManagementPage.summaryVisibility();
});

When("the user select recording menu", () => {
  BatchManagementPage.selectRecordingMenu();
});

Then("the recording get display", () => {
  BatchManagementPage.recordingVisibility();
});

When("the user select testimonial menu", () => {
  BatchManagementPage.selectTestimonialMenu();
});

Then("the testimonail get display", () => {
  BatchManagementPage.testimonialVisibility();
});

When("the user select session menu", () => {
  BatchManagementPage.selectSessionMenu();
});

When("the user select add new session button", () => {
  BatchManagementPage.selectAddSession();
});

When("the user select date", () => {
  BatchManagementPage.selectDate();
});

When("the user click add button", () => {
  BatchManagementPage.selectAdd();
});

Then("the session get added", () => {
  BatchManagementPage.sessionAddSuccess();
});