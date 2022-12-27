class CreateCoursePage {
  createCourseMenuXpath = "//button[.='Add Course']";
  searchCategoryXpath = "//input[@placeholder='Search category here']";
  selectGradeOneCategoryXpath =
    "//button[2]//p[. = 'Courses > Academics > Elementary > ']";
  inputCourseTitleXpath = "//input[@placeholder='Write your course title']";
  selectTopicXpath =
    "body > div.flex.w-full.flex-row.items-start.justify-start > div.flex.flex-1.h-screen.overflow-hidden > div > div.w-auto.h-full.bg-white2-primary > div > div > div > div:nth-child(3) > div > div > div > div > div > div.hierarchy-container > svg > g > g:nth-child(7) > foreignObject > div > div.node-buttons > div.add-indented-icon > img";
  gradeOneTopicXpath =
    "body > div.flex.w-full.flex-row.items-start.justify-start > div.flex.flex-1.h-screen.overflow-hidden > div > div.w-auto.h-full.bg-white2-primary > div > div > div > div:nth-child(3) > div > div > div > div > div > div.hierarchy-container > svg > g > g:nth-child(7) > foreignObject > div > text";
  ageGroupXpath = "//p[.='Select Age Group']";
  selectChildrenXpath = "//label[.='Children']";
  saveButtonXpath = "//button[.='Save']";
  courseDivXpath = "//p/div[.='Course']";

  createCourseMenu() {
    cy.xpath(this.courseDivXpath).click();
    cy.xpath(this.createCourseMenuXpath).click({ force: true });
  }

  selectGradeOneCategory() {
    cy.wait(5000);
    cy.xpath(this.searchCategoryXpath).type("grade");
    cy.wait(3000);
    cy.xpath(this.selectGradeOneCategoryXpath).click();
  }

  inputCourseTitle(courseTitle) {
    cy.wait(3000);
    cy.xpath(this.inputCourseTitleXpath).type(courseTitle);
  }

  selectTopic() {
    cy.wait(3000);
    // cy.get(this.gradeOneTopicXpath).invoke("show").click();
    cy.xpath("//text[contains(text(),'grade 1 topic')]").trigger('mouseover')
    cy.get('.add-indented-icon').eq(3).click({ force: true });
  }

  selectAgeGroup() {
    cy.xpath(this.ageGroupXpath).click();
    cy.xpath(this.selectChildrenXpath).click();
  }

  saveButton() {
    cy.xpath(this.saveButtonXpath).click();
  }

  searchCategoryVisibility() {
    cy.xpath(this.searchCategoryXpath).should("be.visible");
  }

  selectCourseMenu() {
    cy.xpath("//div[contains(text(),'Course')]").click();
  }

  selectAddCourse() {
    cy.xpath("//button[contains(text(),'Add Course')]").click({ force: true });
  }

  inputCourseName() {
    cy.get("[name='courseTemplate.name']").type("New Course");
  }

  courseCreateSuccess() {
    cy.contains("Course Template Created Successfully");
  }

  searchCourse() {
    cy.get("[name='name']").type("Course for purchase using automation");
  }

  courseVisibility() {
    cy.contains("Course for purchase using automation");
  }

}

export default new CreateCoursePage();
