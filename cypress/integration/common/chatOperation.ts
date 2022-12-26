import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { ChatOperationPage } from "../pages/Page";

When("the user select chat operation option from the dropdown", () => {
    ChatOperationPage.selectChatOperationMenu();
});

When("the user select club label", () => {
    ChatOperationPage.selectclubFilter();
});

Then("the club channel should be display", () => {
    ChatOperationPage.clubVisibility();
});

When("the user select student support label", () => {
    ChatOperationPage.selectStudentSupportFilter();
});

Then("the student support channel should be display", () => {
    ChatOperationPage.studentSupportVisibility();
});