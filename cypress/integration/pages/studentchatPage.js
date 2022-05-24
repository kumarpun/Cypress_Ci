export class StudentChatPage {
    chatZoneMenuXpath = "//div[contains(text(),'Chat Zone')]";
    groupChatMenuXpath = "//span[contains(text(), 'Groups')]";

    selectChatZone() {
        cy.xpath(this.chatZoneMenuXpath).click();
    }

    groupChatMenuVisibility() {
        cy.xpath(this.groupChatMenuXpath).should("be.visible");
    }
}