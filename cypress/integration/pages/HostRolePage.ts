class HostRolePage {
  hostFeatureSessionXpath = "//div[contains(text(),'Host feature')]";
  courseDetailButtonXpath =
    "//div[contains(text(),'Host feature')]//following::button[text()='Course Detail'][1]";
  courseTitle = "Host feature";
  titleSetting =
    "//div[contains(@slot, 'title')]/a/img[contains(@alt, 'Settings')]";
  inputTagXpath = "//input[@class='svelte-tags-input svelte-1s4blrc']";
  saveCourseButtonXpath = "//button[.='Save Course']";
  tagVisibilityXpath = "//span[@class='svelte-tags-input-tag svelte-1s4blrc']";
  removeTagXpath =
    "//span[@class='svelte-tags-input-tag-remove svelte-1s4blrc']";

  checkHostSessionVisibility() {
    cy.xpath(this.hostFeatureSessionXpath).should("be.visible");
  }

  CourseDetailButton() {
    cy.xpath(this.courseDetailButtonXpath).click();
  }

  checkCourseTitleVisibility() {
    return cy.contains(this.courseTitle);
  }

  titleSettingVisibility() {
    cy.xpath(this.titleSetting).click();
  }

  inputTag() {
    cy.xpath(this.inputTagXpath).type("test").type("{enter}");
  }

  inputTagVisibility() {
    cy.xpath(this.inputTagXpath).should("be.visible");
    cy.xpath(this.saveCourseButtonXpath).click();
  }

  saveCourseButton() {
    cy.xpath(this.saveCourseButtonXpath).click();
  }

  tagVisibility() {
    cy.xpath(this.tagVisibilityXpath).should("be.visible");
  }

  removeTag() {
    cy.xpath(this.removeTagXpath).click({ multiple: true });
  }
}

export default new HostRolePage();
