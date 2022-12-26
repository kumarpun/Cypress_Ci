class CalendarPage {
  calenderMenuXpath = "//a[contains(text(),'Calendar')]";
  calenderTimeXpath = "//div[contains(text(),'11pm')]";

  selectCalendarMenu() {
    cy.xpath(this.calenderMenuXpath).click();
  }

  calendarTimeVisibility() {
    cy.xpath(this.calenderTimeXpath).should("be.visible");
  }

  selectWeekTab() {
    cy.contains("week").click({ force: true });
  }

  selectMonthTab() {
    cy.contains("month").click({ force: true });
  }

  weekDayVisibility() {
    cy.contains("Sun");
  }

  monthVisibility() {
    cy.contains("Sun");
  }
}

export default new CalendarPage();
