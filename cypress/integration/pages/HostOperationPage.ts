class HostOperationPage {
    dropDownXpath = "[name='modules']";

    selectHostOperations() {
        cy.wait(5000);
        cy.get(this.dropDownXpath).select("Host Operations", { force: true });
    }

    searchHost() {
        cy.get("#select-user").type("kumarpun255@gmail.com");
        cy.wait(5000);
        cy.xpath("//div[contains(text(),'kumar test - kumarpun255@gmail.com')]").click({ force: true });
    }

    selectSearchButton() {
        cy.xpath("//button[contains(text(),'Search')]").click();
    }

    selectSuspendedLabel() {
        cy.xpath("//label[contains(text(),'Active')]").click();
        cy.xpath("//label[contains(text(),'Suspended')]").click();
    }

    suspendedVisibility() {
        cy.contains("SUSPENDED");
    }

    selectViewHostCategory() {
        cy.xpath("//div[contains(text(),'View Host Category')]").click();
    }
}

export default new HostOperationPage();