export class StudentProfilePage {
    ownAvatarLinkXpath = "//div[2]/div[1]/span/*[name()='svg']/*[name()='g']/*[name()='g']/*[name()='g']/*[name()='g'][3]/*[name()='g'][4]/*[name()='g'][2]/*[name()='g']/*[name()='g'][2]/*[name()='g'][3]//*[name()='rect']";
    editProfileButtonXpath = "//button[. = 'Edit Profile']";

    selectAvatarLink() {
        cy.xpath(this.ownAvatarLinkXpath).click();
    }

    profileVisibility() {
        cy.xpath(this.editProfileButtonXpath).should("be.visible");
    }
}