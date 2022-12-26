import util from "util";

class HomePage {
  userAvatarImage = ".avatarImage";
  switchToHostingOptionXpath = '//div[.="Switch to Hosting"]';
  createSessionsButtonText = "Create Sessions";
  createSessionOptionXpath = '//a[.="%s"]';
  courseInputSelector = '//input[@placeholder="Search a course..."]';

  checkAvatarVisibility() {
    cy.get(this.userAvatarImage).should("be.visible");
  }

  switchToHosting() {
    return cy
      .get(this.userAvatarImage)
      .click()
      .then(() => {
        cy.xpath(this.switchToHostingOptionXpath).click();
      });
  }

  checkCreateSessionButtonVissibility() {
    return cy.contains(this.createSessionsButtonText);
  }

  openSingleSessionCreationForm(sessionType) {
    const sessionOptionXpath = util.format(
      this.createSessionOptionXpath,
      sessionType
    );

    return this.checkCreateSessionButtonVissibility()
      .click()
      .then(() => {
        cy.xpath(sessionOptionXpath).click();
      });
  }

  scrollToExploreCourseButton() {
    cy.xpath("//button[contains(text(),'Explore Courses')]").scrollIntoView();
  }

  exploreButtonVisibility() {
    cy.xpath("//button[contains(text(),'Explore Courses')]").should(
      "be.visible"
    );
  }

  selectExploreCourseButton() {
    cy.xpath("//button[contains(text(),'Explore Courses')]").click({
      force: true,
    });
  }

  searchCourseVisibility() {
    cy.xpath(this.courseInputSelector).should("be.visible");
  }

  scrollToBottom() {
    cy.scrollTo("bottom");
  }

  footerVisibilty() {
    cy.contains("Site");
    cy.contains("Privacy");
  }

  selectTeachTab() {
    cy.xpath("//h3[contains(text(),'Teach')]").scrollIntoView();
    cy.xpath("//h3[contains(text(),'Teach')]").click({ force: true });
  }

  teachContentVisibility() {
    cy.contains(
      "Enthuziastic as a collaborative platform encourages the members to take up the role of instructor in the area of their expertise and teach those skills."
    ).scrollIntoView();
  }

  selectAboutMenu() {
    cy.get('.px-1').contains('About').click()
    cy.get("[alt='About Us']").click()
  }

  aboutUsPageVisibility() {
    cy.contains('h2', 'We are like minded people actively coming together and forming a collaborative community called Enthuziastic.')
    cy.get('p').contains('Courses').scrollIntoView();
  }
}

export default new HomePage();
