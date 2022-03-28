export class StrikePage {
    strikeMenuXpath = "//span[.='Strikes']";
    disputeButtonXpath = "//button[.='Disputes']";

    selectStrikeMenu() {
        cy.xpath(this.strikeMenuXpath).click();
    }

    DisputeTabVisibility() {
        cy.xpath(this.disputeButtonXpath).should("be.visible");
    }
}