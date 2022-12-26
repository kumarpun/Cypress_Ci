/// <reference path='../../support/index.d.ts' />

import { When } from "cypress-cucumber-preprocessor/steps";
import { HostingPage } from "../pages/Page";
import Helper from "../helpers/helper";

When("user enters the following session creation details", (table) => {
  for (const { field, value } of Helper.hashDataTable(table)) {
    // If the value starts and ends with % sign then we need to replace it with actual value depending on the code.
    value = getActualValue(field, value);

    HostingPage.enterSessionDetails(field, value);

    // if the scheduling_timezone field is set, then update the value of Helper._lastSetTimezone
    // if (field === "scheduling_timezone") {
    //   Helper.updateLastSetTimezone(value);
    // }
  }
});

When("the user submits the session for review", () => {
  HostingPage.submitSessionForReview();
});

Then(
  "the session {string} should be displayed on the scheduled events list",
  (sessionName: string) => {
    HostingPage.findSessionInScheduledList(sessionName);
  }
);

Then("the user should still be in the session creation page", () => {
  HostingPage.ckeckSessionCreationForm();
});

Then("the user should still be in the single session creation page", () => {
  HostingPage.ckeckSingleSessionCreationForm();
});

function getActualValue(field, value) {
  if (value === "%description_250%" || value === "%requirements_250%") {
    value = Helper.generateRandomString(250);
  } else if (field === "scheduling_date") {
    value = Helper.getFormattedDate(value);
    // Helper.getNextImmediateTime();
  } else if (field === "batch_start_date") {
    value = Helper.getFormattedDate(value);
  }

  return value;
}
