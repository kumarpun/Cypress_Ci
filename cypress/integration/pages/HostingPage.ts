import "cypress-file-upload";
import util from "util";

class HostingPage {
  sessonTitle = "textarea#title";
  CategorySelect = "select#category";
  thumbNailImageUpload =
    '#course-thumbnail-image input.filepond--browser[type="file"]';
  sessionImageUpload = '#course-image input.filepond--browser[type="file"]';
  sessionDescription = ".course-description";
  sessionRequirements = ".course-requirement";
  datepicker = ".datepicker";
  calendarDayXpath =
    '//div[contains(@class,"day") and not(contains(@class, "is-disabled")) and not(contains(@class, "outside-month"))]/button[.="%s"]';
  calendarTitle = ".calendar .title";
  calendarMonthXpath =
    '//div[contains(@class,"month-selector--month")]/span[.="%s"]';
  timeZoneSelect = "#timezone";
  sessionNumberXpath = '//input[@placeholder="Number of Sessions"]';
  scheduleDurationSelectXpath =
    '//div[.="Select Duration for the Course"]//following-sibling::div//div[contains(@class,"selectContainer")]';
  scheduleDurationItemXpath =
    '//div[.="Select Duration for the Course"]//following-sibling::div//div[contains(@class,"listContainer")]//div[.="%s "]';
  defaultTimeZoneInStartTimeXpath =
    '//p[.="Start Time"]//parent::div//parent::div//following-sibling::div//img//parent::div//following-sibling::div';
  freeSessonCheckbox = "#free-course";
  additionalDetailsTagsButtonXpath =
    '//div[contains(@class,"items-start")]//div[.="tags"]';
  additionalDetailsTagsInputXpath =
    '//input[contains(@class,"svelte-tags-input")]';
  additionalDetailsAudienceButtonXpath =
    '//div[contains(@class,"items-start")]//div[.="audience"]';
  enableAgeRangeSelection = "#range-select";
  additionalDetailsDifficultyButtonXpath =
    '//div[contains(@class,"items-start")]//div[.="difficulty"]';
  additionalDetailsLanguageButtonXpath =
    '//div[contains(@class,"items-start")]//div[.="language"]';
  submitForReviewText = "Submit for Review";
  sessionInScheduledEventListXpath =
    '//div[contains(@class,"title-large-semibold-black")][.="%s"]';
  SessionCreationFormTitle = "Course Creation";
  SingleSessionCreationFormTitle = "Single Session Creation";
  MissingRequiredFieldXpath = "//div[@class='_toastMsg svelte-vfz6wa']";
  tagAreaXpath = "//input[@name = 'svelte-tags-input']";
  difficultyLevelXpath = '//button[.="intermediate"]';
  selectLanguageArea = "#select-language";
  selectLanguage = '//div[.="%s"]';

  sessionDetailsAllowedFieldsArray = [
    "title",
    "category",
    "thumbnail_image",
    "session_image",
    "description",
    "requirements",
    "scheduling_date",
    "batch_start_date",
    "session_number",
    "start_time",
    "duration",
    "free_course",
    "additional_details_tags",
    "additional_details_audience",
    "additional_details_difficulty",
    "additional_details_language",
  ];

  enterSessionDetails(field, value) {
    if (this.sessionDetailsAllowedFieldsArray.includes(field)) {
      const fieldDetails = this.getfieldDetails(field);
      return this.setFieldValue(fieldDetails, value);
    } else {
      throw new Error(
        `Unknown field: "${field}" for session detail assertion.\n` +
          `Allowed fields: ${this.sessionDetailsAllowedFieldsArray.join()}`
      );
    }
  }

  getfieldDetails(field) {
    const fieldDetails = {};

    if (field == "title") {
      fieldDetails["selector"] = this.sessonTitle;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "text input";
    } else if (field == "category") {
      fieldDetails["selector"] = this.CategorySelect;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "select-option";
    } else if (field == "thumbnail_image") {
      fieldDetails["selector"] = this.thumbNailImageUpload;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "image-upload";
    } else if (field == "session_image") {
      fieldDetails["selector"] = this.sessionImageUpload;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "image-upload";
    } else if (field == "description") {
      fieldDetails["selector"] = this.sessionDescription;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "text input";
    } else if (field == "requirements") {
      fieldDetails["selector"] = this.sessionRequirements;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "text input";
    } else if (field == "scheduling_date" || field == "batch_start_date") {
      fieldDetails["selector"] = this.datepicker;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "select date";
    } else if (field == "session_number") {
      fieldDetails["selector"] = this.sessionNumberXpath;
      fieldDetails["locateStrategy"] = "xpath";
      fieldDetails["process"] = "text input";
    }
    // else if (field == "scheduling_timezone") {
    //   fieldDetails["selector"] = this.timeZoneSelect;
    //   fieldDetails["locateStrategy"] = "css";
    //   fieldDetails["process"] = "select-option";
    // }
    else if (field == "duration") {
      fieldDetails["selector"] = this.scheduleDurationSelectXpath;
      fieldDetails["locateStrategy"] = "xpath";
      fieldDetails["process"] = "select-duration";
    } else if (field == "free_course") {
      fieldDetails["selector"] = this.freeSessonCheckbox;
      fieldDetails["locateStrategy"] = "css";
      fieldDetails["process"] = "checkbox";
    } else if (field == "additional_details_tags") {
      fieldDetails["selector"] = this.additionalDetailsTagsButtonXpath;
      fieldDetails["locateStrategy"] = "xpath";
      fieldDetails["process"] = "set-additional-tags";
    } else if (field == "additional_details_language") {
      fieldDetails["selector"] = this.additionalDetailsLanguageButtonXpath;
      fieldDetails["locateStrategy"] = "xpath";
      fieldDetails["process"] = "set-additional-language";
    } else {
      //do nothing
    }

    return fieldDetails;
  }

  setFieldValue(fieldDetails, fieldValue) {
    //First we select the element, using cy.get() or cy.xpath().
    if (fieldDetails.locateStrategy === "xpath") {
      cy.xpath(fieldDetails.selector).as("selectElement");
    } else if (fieldDetails.locateStrategy === "css") {
      cy.get(fieldDetails.selector).as("selectElement");
    } else {
      throw new Error(
        "Unknown selector type: " +
          fieldDetails.type +
          " for field " +
          fieldDetails.fieldValue
      );
    }

    // Next, we perform action, such as type the value if it is input textarea, select appropriate option if it is select options, etc.
    if (fieldDetails.process === "text input") {
      cy.get("@selectElement").type(fieldValue);
    } else if (fieldDetails.process === "select-option") {
      cy.get("@selectElement").select(fieldValue);
    } else if (fieldDetails.process === "image-upload") {
      return cy.get("@selectElement").attachFile(fieldValue);
    } else if (fieldDetails.process === "select date") {
      // Open the datepicker
      cy.get("@selectElement").click().get(this.calendarTitle).click();

      // Select the appropriate date
      return cy
        .xpath(util.format(this.calendarMonthXpath, fieldValue.month))
        .click()
        .xpath(util.format(this.calendarDayXpath, fieldValue.day))
        .click();
    } else if (fieldDetails.process === "select-duration") {
      cy.get("@selectElement").click();

      return cy
        .xpath(util.format(this.scheduleDurationItemXpath, fieldValue))
        .click();
    } else if (fieldDetails.process === "checkbox") {
      if (fieldValue) {
        cy.get("@selectElement").click();
      }
    } else if (fieldDetails.process === "set-additional-tags") {
      cy.get("@selectElement").click();

      // add tags
      return cy.xpath(this.tagAreaXpath).type(fieldValue).type("{enter}");
    } else if (fieldDetails.process === "set-additional-difficulty") {
      cy.get("@selectElement").click();
    } else if (fieldDetails.process == "set-additional-language") {
      cy.get("@selectElement").click();

      // add language
      return cy
        .get(this.selectLanguageArea)
        .click()
        .xpath(util.format(this.selectLanguage, fieldValue))
        .click();
    }
  }

  // getDefaultTimezone() {
  //   // @Todo
  // We need to upgrade this method so that the timezone of multiple session can be extracted
  // We can do this either by changing the xpath that works with both single and multiple sessions
  // Or we need to set some flag to know which session is being created, and invoke the DOM element accordingly
  //   return cy.xpath(this.defaultTimeZoneInStartTimeXpath).invoke("text");
  // }

  submitSessionForReview() {
    cy.contains(this.submitForReviewText).click({ force: true });
  }

  findSessionInScheduledList(sessionName: string) {
    const eventSelector: string = util.format(
      this.sessionInScheduledEventListXpath,
      sessionName
    );
    cy.xpath(eventSelector).should("be.visible");
  }

  ckeckSessionCreationForm() {
    cy.contains(this.SessionCreationFormTitle);
  }

  ckeckSingleSessionCreationForm() {
    cy.contains(this.SingleSessionCreationFormTitle);
  }

  selectAdditionalLanguage() {
    cy.xpath(this.additionalDetailsDifficultyButtonXpath).click();
  }
}

export default new HostingPage();
