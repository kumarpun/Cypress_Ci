/// <reference path='../../support/index.d.ts' />

import Helper from "../integration/helpers/helper";
import { HostingPage } from "../integration/pages/Page";

// Cypress.Commands.add("getTimezone", () => {
//   var timezone = Helper._lastSetTimezone;
//   if (timezone.length === 0) {
// if no timezone was specified in the previous steps of the tests,
// Then get the timezone that is set by default in the UI

//     timezone = HostingPage.getDefaultTimezone();
//   }
//   return timezone;
// });

function getActualValue(field, value) {
  if (value === "%description_250%" || value === "%requirements_250%") {
    value = Helper.generateRandomString(250);
  } else if (field === "scheduling_date") {
    value = Helper.getFormattedDate(value);
    // Helper.getNextImmediateTime();
  } else if (field === "batch_start_date") {
    value = Helper.getFormattedDate(value);
    // Helper.getNextImmediateTime();
  }

  return value;
}

Cypress.Commands.add(
  "iframe",
  { prevSubject: "element" },
  ($iframe, callback = () => {}) => {
    // For more info on targeting inside iframes refer to this GitHub issue:
    // https://github.com/cypress-io/cypress/issues/136
    cy.log("Getting iframe body");

    return cy
      .wrap($iframe)
      .should((iframe) => expect(iframe.contents().find("body")).to.exist)
      .then((iframe) => cy.wrap(iframe.contents().find("body")))
      .within({}, callback);
  }
);

// declare namespace Cypress {
//   interface Chainable<Subject> {
//     loginGoogle(): void;
//   }
// }

// Cypress.Commands.add("loginGoogle", () => {
//   cy.visit("https://accounts.google.com/Login?hl=en");
//   cy.location().then((loc) => {
//     if (!loc.href.includes("https://myaccount.google.com")) {
//       cy.get("#identifierId").type("kumar@enthu.com");
//       cy.get("#identifierNext").click();
//       cy.get("#password").type("qwertyuiop");
//       cy.get("#submit").click();
//     }
//   });
// });