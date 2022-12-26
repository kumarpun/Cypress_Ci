import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { PaymentPage } from "../pages/Page";

When("the user select searched course", () => {
  PaymentPage.checkCourseVisibility();
});

When("the user select enroll now button", () => {
  PaymentPage.enrollNow();
});

When("the user select goto payment button", () => {
  PaymentPage.selectGotoPayment();
});

When("the user enters card details", () => {
  PaymentPage.enterCardDetails();
});

When("the user submit payment", () => {
  PaymentPage.submitPayment();
});

When("the user select book a trial button", () => {
  PaymentPage.selectBookATrialButton();
});

When("the user input date", () => {
  PaymentPage.inputDate();
});

When("the user click book a trial button", () => {
  PaymentPage.selectBookATrialButton1();
});

Then("the course should be purchased", () => {
  PaymentPage.paymentSuccess();
});

When("the user select pay with card", () => {
  PaymentPage.selectCreditDebitButton();
});
