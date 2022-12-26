class ChatOperationPage {
    dropDownXpath = "[name='modules']";

    selectChatOperationMenu() {
        cy.wait(5000);
        cy.get(this.dropDownXpath).select("Chat Operations", { force: true });
    }

    selectclubFilter() {
        cy.get('label').contains('Club').click()
        cy.get("[type='submit']").click()
    }

    clubVisibility() {
        cy.get("td:contains('CLUB')")
    }

    selectStudentSupportFilter() {
        cy.get('label').contains('Student Support').click()
        cy.get("[type='submit']").click()
    }

    studentSupportVisibility() {
        cy.get("td:contains('STUDENT_SUPPORT')")
    }
}
export default new ChatOperationPage()