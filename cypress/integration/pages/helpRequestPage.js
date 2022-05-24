export class HelpRequestPage {
  helpRequestMenuXpath = "//span[.='Help Requests']";
  helpRequestTitleXpath = "//h3[.='Help Requests']";
  accepHelpButtonXpath = "//button[.='Accept']";
  chatMessageApproachXpath = "//button[.='Chat Message']";
  inputMessageXpath =
    "//input[@placeholder='Write a message (max 250 characters allowed)']";
  sendIconSelector = "#Path_497";
  messageVisibilityXpath = "//span[. = 'Hi, What happened?']";
  completeIconSelector =
    "#Ellipse_138";
  completeReasonXpath =
    "//textarea[@placeholder = 'Briefly summarise the outcome…']";
  completeButtonXpath = "//button[.='Complete']";
  validateCompleteXpath = "//div[.='test valid help request complete']";

  helpRequestMenu() {
    cy.xpath(this.helpRequestMenuXpath).click();
  }

  helpRequestTitleVisibility() {
    cy.xpath(this.helpRequestTitleXpath).should("be.visible");
  }

  acceptHelp() {
    cy.xpath(this.accepHelpButtonXpath).click();
  }

  chatMessage() {
    cy.xpath(this.chatMessageApproachXpath).click();
  }

  enterMessage() {
    cy.xpath(this.inputMessageXpath).type("Hi, What happened?");
  }

  sendMessage() {
    cy.get(this.sendIconSelector).click();
  }

  messageVisibility() {
    cy.xpath(this.messageVisibilityXpath).should("be.visible");
  }

  completeIcon() {
    cy.get(this.completeIconSelector).click({ force: true });
  }

  enterCompleteReason() {
    cy.xpath(this.completeReasonXpath).type("test valid help request complete");
  }

  completeButton() {
    cy.xpath(this.completeButtonXpath).click();
  }

  validateHelpRequestComplete() {
    cy.xpath(this.validateCompleteXpath).should("be.visible");
  }
}
