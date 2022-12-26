class FamilyOperationsPage {
    dropDownXpath = "[name='modules']";

    selectFamilyOperations() {
        cy.wait(5000);
        cy.get(this.dropDownXpath).select("Family Operations", { force: true });
    }
}

export default new FamilyOperationsPage();