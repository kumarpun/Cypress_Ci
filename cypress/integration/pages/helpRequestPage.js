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
    "div.sc-pQdCa.jqrPXB.container-fluid:nth-child(2) div.sc-pXZzD.ivUHTG.row:nth-child(1) main.main-content.p-0.col-sm-12.col-md-9.offset-md-3.col-lg-9.offset-lg-3.col-xl-10.offset-xl-2 div.sc-pQdCa.jqrPXB.main-content-container.px-4.container-fluid div.sc-pKMan.sc-pcxhi.kMxZOc div.sc-qQlgh.dnZKXh div.sc-pAYXY.bEGtdL.flex.flex-column div.sc-pRSgm.kKcmPp div.sc-qapxP.jnVPKq div.d-flex:nth-child(2) button.ant-btn.sc-AxhCb.jIYeZT.ml-2.icon-button:nth-child(1) > svg:nth-child(1)";
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
    cy.get(this.completeIconSelector).click();
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
