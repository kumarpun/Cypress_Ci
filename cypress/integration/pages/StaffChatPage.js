export class StaffChatPage {
    chatZoneMenuXpath = "//span[.='Chat Zone']";
    chatZoneTitleVisibilityXpath = "//h3[.='Chat Zone']";
    groupChatRowActionXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[9]/div[1]/button[1]/img[1]";
    groupChatDetailPageVisibilityXpath = "//button[.='Back To Group Chats']";
    infoIconSelector = "#Path_8437";
    chatSummaryXpath = "//h6[.='Chat Summary']";
    individualChatButtonXpath = "//button[.='Individual Chat']";
    individualChatRowActionXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]/div[1]/button[1]/img[1]";
    individualChatInfoSelector = "#info";
    viewByStudentButtonXpath = "//button[.='View By Student']";
    viewByStudentRowActionXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]/div[1]/button[1]/img[1]";

    selectChatZoneMenu() {
        cy.xpath(this.chatZoneMenuXpath).click();
    }

    chatZoneTitleVisibility() {
        cy.xpath(this.chatZoneTitleVisibilityXpath).should("be.visible");
    }

    selectGroupChatRowAction() {
        cy.xpath(this.groupChatRowActionXpath).click();
    }

    groupChatDetailPageVisibility() {
        cy.xpath(this.groupChatDetailPageVisibilityXpath).should("be.visible");
    }

    selectInfoIcon() {
        cy.get(this.infoIconSelector).click({ force: true });
    }

    chatSummaryVisibility() {
        cy.xpath(this.chatSummaryXpath).should("be.visible");  
    }

    selectIndividualChatButton() {
        cy.xpath(this.individualChatButtonXpath).click();
    }

    individualChatRowActionVisibility() {
        cy.xpath(this.individualChatRowActionXpath).should("be.visible");   
    }

    selectIndividualChatRowAction() {
        cy.xpath(this.individualChatRowActionXpath).click();
    }

    individualChatInfoSelectorVisibility() {
        cy.get(this.individualChatInfoSelector).should("be.visible");    
    }

    selectIndividualInfoIcon() {
        cy.get(this.individualChatInfoSelector).click({ force: true });
    }

    selectViewByStudentButton() {
        cy.xpath(this.viewByStudentButtonXpath).click();
    }

    viewByStudentRowActionVisibility() {
        cy.xpath(this.viewByStudentRowActionXpath).should("be.visible");      
    }

    selectViewByStudentRowActionIcon() {
        cy.xpath(this.viewByStudentRowActionXpath).click();      
    }
}