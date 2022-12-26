class BrowseCoursePage {
  browseCoursesXpath = "//p[.='Browse Courses']";
  setPricingText = "Browse Courses";
  courseXpath = "//tbody/tr[1]/td[1]";
  editTitleButtonXpath = "//button[.='Edit Title']";
  courseTitlePlaceholderXpath = "//input[@placeholder = 'Course Title']";
  saveButtonXpath = "//div[2]/button[. = 'Save']";
  courseTitleVisibilityXpath = "//h4[.='New course']";
  courseDivXpath = "//p/div[.='Course']";

  browseCourseText() {
    cy.xpath(this.courseDivXpath).click({ force: true });
  }

  pricingText() {
    cy.contains(this.setPricingText).should("be.visible");
  }

  selectCourse() {
    cy.xpath(this.courseXpath).click();
  }

  editTitleButton() {
    cy.xpath(this.editTitleButtonXpath).click();
  }

  editTitle() {
    cy.xpath(this.courseTitlePlaceholderXpath).clear();
    cy.xpath(this.courseTitlePlaceholderXpath).type("New course");
  }

  saveButton() {
    cy.xpath(this.saveButtonXpath).click();
  }

  courseTitleVisibility() {
    cy.xpath(this.courseTitleVisibilityXpath).should("be.visible");
  }

  selectSlugs() {
    cy.contains("Slugs").click();
  }

  enterSlugName() {
    cy.get("[name='slug']").type("test-slug");
  }

  selectAddButton() {
    cy.xpath("//button[.='Add']").contains('Add').click({force: true});
  }

  slugAddSuccess() {
    cy.wait(2000);
    cy.xpath("//p[.='test-slug'][1]").should("be.visible");
  }

  selectFaq() {
    cy.contains("Faq").click();
  }

  addFAQ() {
    cy.xpath("//button[contains(text(),'Add FAQ')]").click({multiple: true, force: true});
    cy.get("[name='question']").type("FAQ question");
    cy.get("[name='answer']").type("FAQ answer");
  }

  submitFAQ() {
    cy.xpath("//div[3]/button[1][.='Add']").click({force: true});
  }

  FaqSuccess() {
    cy.contains("FAQ added successfully");
  }

  selectDeleteIcon() {
    cy.xpath("//img[@alt='delete faq']").click({ force: true });
  }

  confirmDelete() {
    cy.xpath("//button[contains(text(),'Yes')]").click();
  }

  faqDeleteSuccess() {
    cy.contains("FAQ deleted successfully");
  }

  selectPricingTab() {
    cy.contains("Pricing").click();
  }

  addPricing() {
    cy.xpath("//button[contains(text(),'Not Override')]").click();
    cy.xpath("//div[1]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[1]/div/div/div/div/div/input").clear();
    cy.xpath("//div[1]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[1]/div/div/div/div/div/input").type("100");
  }

  clickSaveButton() {
    cy.xpath("//div/button[. = 'Save']").click();
  }

  pricingSuccess() {
    cy.contains("Pricing Updated Successfully");
  }
}

export default new BrowseCoursePage();
