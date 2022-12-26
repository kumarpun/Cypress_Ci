import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { CalendarPage } from "../pages/Page";

When("the user select calendar menu", () => {
  CalendarPage.selectCalendarMenu();
});

Then("the calendar data should be display", () => {
  CalendarPage.calendarTimeVisibility();
});

When("the user select week tab", () => {
  CalendarPage.selectWeekTab();
});

Then("the week day should be visible", () => {
  CalendarPage.weekDayVisibility();
});

When("the user select mon tab", () => {
  CalendarPage.selectMonthTab();
});

Then("the month should be visible", () => {
  CalendarPage.monthVisibility();
});
