class CreateTopicPage {
  gradeTopicOneXpath = "//text[.='grade 1']";
  plusIconSelector =
    "body > div.flex.w-full.flex-row.items-start.justify-start > div.flex.flex-1.h-screen.overflow-hidden > div > div.w-auto.h-full.bg-white2-primary > div > div > div.undefined.w-full.bg-white2-primary.rounded-\\[2\\.188rem\\].mb-6.md\\:mb-28.rounded-none.shadow-none > div > div > div:nth-child(4) > div.flex.undefined.items-start.rounded-none.shadow-none.justify-between > div > svg > g > g:nth-child(7) > foreignObject > div > div.node-buttons > div.add-indented-icon > img";
  gradeOneTopicPlusSelector =
    "(//div[@class='add-indented-icon']/img[@class='info-icon'])[1]";
  inputTopicTitleXpath = "//input[@placeholder='Write your topic title']";
  levelSelector = "[name='level']";
  inputDuration = "//input[@placeholder='Duration']";
  inputDescription = "//textarea[@placeholder='Write your topic description']";
  addTopicButtonXpath = "//button[.='Add Topic']";
  addedTopicXpath = "//text[.='Add topic from automation']";
  deleteIconSelector =
    "(//div[@class='sub-indented-icon']/img[@class='info-icon'])[4]";
  inputTopicNameToDeleteXpath = "//input[@placeholder='']";
  deleteTopicButtonXpath =
    "//button[.='I understand the consequences, delete this topic']";
  infoIconSelector =
    "(//div[@class='info-indented-icon']/img[@class='info-icon'])[4]";
  topicDetail = "Topic Detail";
  editingLockButtonXpath = "//button[.='Editing Locked']";
  updateTopicButtonXpath = "//button[.='Update Topic']";
  searchTopicAreaXpath = "//input[@placeholder='Search topic to update']";
  searchedTopicXpath =
    "/html/body/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[3]/div[1]/div/div/div/div[2]";
  searchedTopicResultXpath = "//p[.='Add topic from automation']";

  selectPlusIcon() {
    cy.wait(3000);
    cy.xpath(this.gradeOneTopicPlusSelector).click({ force: true });
  }

  selectInfoIcon() {
    cy.wait(3000);
    cy.xpath(this.infoIconSelector).click({ force: true });
  }

  topicDetailvisibility() {
    cy.contains(this.topicDetail).should("be.visible");
  }

  inputTopicTitle() {
    cy.xpath(this.inputTopicTitleXpath).type("Add topic from automation");
  }

  selectLevel() {
    cy.get(this.levelSelector).select("Beginners");
  }

  enterDuration() {
    cy.xpath(this.inputDuration).type("60");
  }

  updateDuration(duration) {
    cy.xpath(this.inputDuration).clear();
    cy.xpath(this.inputDuration).type(duration);
  }

  enterDescription() {
    cy.xpath(this.inputDescription).type("test topic description");
  }

  updateDescription() {
    cy.xpath(this.inputDescription).clear();
    cy.xpath(this.inputDescription).type("test topic update");
  }

  updateTopicButton() {
    cy.xpath(this.updateTopicButtonXpath).click();
  }

  addTopicButton() {
    cy.xpath(this.addTopicButtonXpath).click();
  }

  topicAddedVisibility() {
    cy.wait(4000);
    cy.xpath(this.addedTopicXpath).should("be.visible");
  }

  selectDeleteIcon() {
    cy.xpath(this.deleteIconSelector).click({ force: true });
  }

  enterTopicNameToDelete() {
    cy.xpath(this.inputTopicNameToDeleteXpath).type(
      "Add topic from automation"
    );
  }

  deleteTopicButton() {
    cy.xpath(this.deleteTopicButtonXpath).click();
  }

  gradeOneCategoryVisibility() {
    cy.wait(3000);
    cy.xpath(this.gradeTopicOneXpath).should("be.visible");
  }

  editingLockedButton() {
    cy.xpath(this.editingLockButtonXpath).click();
  }

  searchTopic() {
    cy.xpath(this.searchTopicAreaXpath).click();
    cy.xpath(this.searchTopicAreaXpath).type("Add topic from automation");
    cy.wait(2000);
  }

  selectSearchedTopic() {
    cy.xpath(this.searchedTopicXpath).click();
  }

  searchedTopicResult() {
    cy.xpath(this.searchedTopicResultXpath).should("be.visible");
  }
}

export default new CreateTopicPage();
