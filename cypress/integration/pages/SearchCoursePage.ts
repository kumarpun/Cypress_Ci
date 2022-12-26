class SearchCoursePage {
  coursesLinkXpath = '//a[.="Courses"]';
  courseInputSelector = '//input[@placeholder="Search a course..."]';
  searchedCourseXpath = "//h5[contains(text(), 'Test Custom Topic Creation')]";
  searchIconXpath = "//div/*[name()='svg']";
  testCourseLinkXpath = "//div[contains(@class, 'mt-2 font-semibold')]";
  testCourseTitle = "Test Custom Topic Creation";

  selectCoursesLink() {
    cy.xpath(this.coursesLinkXpath).click({ force: true });
  }

  enterCourseName(course) {
    cy.wait(8000);
    cy.xpath(this.courseInputSelector).type(course, { force: true });
    cy.xpath(this.courseInputSelector).type("{enter}");
  }

  selectSearchIcon() {
    cy.xpath(this.courseInputSelector).type("{enter}");
  }

  checkCourseVisibility() {
    cy.wait(8000);
    cy.xpath(this.searchedCourseXpath).should("be.visible");
  }

  selectTestCourse() {
    cy.wait(3000);
    cy.xpath(this.searchedCourseXpath).click({ force: true });
  }

  checkCourseDetails() {
    cy.wait(3000);
    cy.contains(this.testCourseTitle);
  }
}

export default new SearchCoursePage();
