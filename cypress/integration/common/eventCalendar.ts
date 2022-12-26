import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { EventCalendarPage } from "../pages/Page";

When("the user select event Calendar option", () => {
    EventCalendarPage.selectEventCalendarMenu();
});

Then("the event page should be display", () => {
    EventCalendarPage.eventPageVisibility();
});

When("the user select week tab", () => {
    EventCalendarPage.selectWeek();
});

Then("the week data get display", () => {
    EventCalendarPage.weekVisibility();
});

When("the user select month tab", () => {
    EventCalendarPage.selectMonth();
});

Then("the month data get display", () => {
    EventCalendarPage.monthVisibility();
});