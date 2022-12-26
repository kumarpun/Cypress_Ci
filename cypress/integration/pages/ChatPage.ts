class ChatPage {
  chatNavXpath = "//a[.='Inbox']";
  searchChatXpath = "[name='search']";

  selectChatNav() {
    cy.xpath(this.chatNavXpath).click();
  }

  searchChatVisibility() {
    cy.wait(5000);
    cy.get(this.searchChatXpath).should("be.visible");
  }

  inputChat() {
    cy.wait(5000);
    cy.get("[name='message']").type("Hi, How are you?");
  }

  sendMessage() {
    cy.xpath("//button[@type='submit']").click();
  }

  messageSentVisibility() {
    cy.contains("Hi, How are you?");
  }

  searchChat() {
    cy.get("[name='search']").type("test chime");
  }

  searchedChatVisibility() {
    cy.xpath("//span[contains(text(),'test chime - Test multi chat')]").should("be.visible");
  }

  selectSearchedChat() {
    cy.wait(2000);
    cy.xpath("(//span[.='test chime'])[2]").click();
  }

  inputChatFormat() {
    cy.get("[name='message']").type("*Hi, How are you?*", {force: true});
  }

  inputIttalicFormat() {
    cy.get("[name='message']").type("_Hi, How are you?_", {force: true});
  }
}

export default new ChatPage();
