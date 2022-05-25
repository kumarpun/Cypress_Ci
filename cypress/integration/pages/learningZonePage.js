export class LearningZonePage {
    learningZoneMenuXpath = "//div[contains(text(),'Learning Zone')]";
    learningTutorialMenuXpath = "//h6[. = 'Learning  Tutorials']";

    selectLearningZoneMenu() {
        cy.xpath(this.learningZoneMenuXpath).click();
    }

    LearningTutorialVisibility() {
        cy.xpath(this.learningTutorialMenuXpath).should("be.visible");
    }
}