export class StudentMessageBoardPage {
    postTextAreaXpath = "//textarea[@id='newTextInput']";
    postButtonxpath = "//button[contains(text(),'POST')]";
    textPostVisibilityXpath = "//div[contains(text(),'Test from automation')]";

    selectTextArea() {
        cy.xpath(this.postTextAreaXpath).click();
    }

    typeText() {
        cy.xpath(this.postTextAreaXpath).type("Test from automation"); 
    }

    selectPostButton() {
        cy.xpath(this.postButtonxpath).click();
    }

    textPostsuccess() {
        cy.xpath(this.textPostVisibilityXpath).should("be.visible");
    }
}