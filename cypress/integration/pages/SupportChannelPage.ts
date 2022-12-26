class SupportChannelPage {
    dropDownXpath = "[name='modules']";

    selectChatOperations() {
        cy.wait(5000);
        cy.get(this.dropDownXpath).select("Chat Operations", { force: true });
    }

    selectCreateButton(){
        cy.xpath("//button[contains(text(),'Create')]").click({ force: true });
    }

    inputChannelName() {
        cy.get("[name='name']").type("Enthu Support channel");
    }

    inputDescription() {
        cy.get("[name='description']").type("Enthu Support channel description");
    }

    selectAddButton() {
        cy.xpath("(//button[.='+ Add User'])[2]").click();
    }

    addUserInBatch() {
        cy.get("#select-user").type("kumarpun255@gmail.com");
        cy.wait(5000);
        cy.xpath("//div[contains(text(),'dinos - kumarpun255@gmail.com')]").click({ force: true });
        cy.xpath("(//button[contains(text(),'Add User')])[1]").click({ force: true });
    }

    selectAddUserButton() {
        cy.xpath("//button[.='Add User']").click();
    }

    selectCreateChannelButton() {
        cy.xpath("(//button[.='Create'])[2]").click();
    }

    createChannelsuccess() {
        cy.wait(4000);
        cy.contains("Enthu Support channel");
    }
}
export default new SupportChannelPage();