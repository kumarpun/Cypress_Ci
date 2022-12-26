import { verify } from "crypto";
import { eq } from "../../../node_modules/cypress/types/lodash/index";

class BatchManagementPage {
  firstRowXpath = "//td[.='1']";
  selectBatchRowXpath = "(//td[.='1'])[1]";

  selectBatchManagement() {
    cy.contains("Batch Management").click({ force: true });
  }

  searchCourse(course) {
    cy.get("[name='searchInput']").type(course, { force: true });
    cy.get("[name='searchInput']").type("{enter}");
  }

  selectBatch() {
    cy.xpath(this.selectBatchRowXpath).click();
  }

  usersListVisibility() {
    cy.xpath("(//p[.='Users'])[3]").should("be.visible");
  }

  selectAdduserButton() {
    cy.xpath("//button[contains(text(),'+ Add User')]").click();
  }

  searchUser() {
    cy.xpath("//input[@placeholder='Search User']").type(
      "test1@mailinator.com"
    );
    cy.xpath(
      "//div[contains(text(),'test mailinator - test1@mailinator.com')]"
    ).click({ force: true });
  }

  addSelectedUser() {
    cy.xpath("//button[.='Add User']").click();
  }

  addSuccessMessage() {
    cy.contains("User assigned successfully");
  }

  selectDeleteButtonBasedOnUser() {
    cy.xpath(
      "(//p[contains(text(),'test mailinator')]//following::img[@alt='delete user'])[1]"
    ).click({ force: true });
  }

  selectRemoveButton() {
    cy.contains("Remove User").click({ force: true });
  }

  userRemoveSuccess() {
    cy.contains("User removed successfully");
  }

  selectGeneralTab() {
    cy.xpath("//p[contains(text(),'General')]").click();
  }

  selectUpdateButton() {
    cy.xpath("(//button[contains(text(),'Update')])[2]").click();
  }

  enterNewCourseName() {
    cy.get("[name='title']").clear();
    cy.get("[name='title']").type("test chime");
  }

  selectSaveButton() {
    cy.xpath("//button[contains(text(),'save')]").click();
  }

  courseSuccess() {
    cy.contains("Course name successfully updated");
  }

  selectUpdateBatch() {
    cy.xpath("(//button[contains(text(),'Update')])[1]").click();
  }

  updateBatchName() {
    cy.get("[name='name']").clear();
    cy.get("[name='name']").type("Test multi chat");
    cy.get('.btn').contains('save').click();
  }

  batchNameUpdateSuccess() {
    cy.contains("Updated Batch Details");
  } 

  selectFeedbackMenu() {
    cy.wait(2000);
    cy.get('p').contains('Feedback').click();
    Cypress.on(
      'uncaught:exception',
      (err) => !err.message.includes('ResizeObserver loop limit exceeded')
    );
  }

  sessionVisibility() {
    cy.wait(5000);
    cy.xpath("//div[contains(text(),'Session 126')]");
  }

  expandedSession() {
    cy.xpath("//div[.='Session 99']").scrollIntoView();
  }

  selectSummaryMenu() {
    cy.get('.body-base').contains('Summary').click();
  }

  summaryVisibility() {
    cy.wait(5000);
    cy.get('div').contains('Session 1');
  }

  selectRecordingMenu() {
    cy.wait(3000);
    cy.get('.body-base').contains('Recordings').click({force: true});
  }

  recordingVisibility() {
    cy.wait(5000);
    cy.get('label').contains('20 Apr 2022');
  }

  selectTestimonialMenu() {
    cy.wait(3000);
    cy.get('.body-base').contains('Testimonials').click({force: true});
  }

  testimonialVisibility() {
    cy.xpath("//p[contains(text(),'ACTIVE')]").should('be.visible');
  }

  selectSessionMenu() {
    cy.wait(3000);
    cy.get('.body-base').contains('Sessions').click({force: true});
  }

  selectAddSession() {
    cy.wait(3000)
    cy.get('.btn').contains('+ Add Session').click()
  }

  selectDate() {
    const dayjs = require('dayjs')
    const curentDate = dayjs().format('YYYY-MM-DD')  //Print todays date
    const date = new Date(curentDate).toLocaleString('en-us',{month:'long', year:'numeric'})
    cy.log(date)
    const month = new Date(curentDate).toLocaleString('en-us',{month:'short'})
    cy.log(month)
    const year = new Date(curentDate).toLocaleString('en-us',{year:'numeric'})
    cy.log(year)
    const nextMonth = dayjs().add(1, 'month').format('MM')
    cy.log(nextMonth)
    const nextYear = dayjs().add(1, 'year').format('YYYY')
    cy.log(nextYear)
    const nextMonthFormat = new Date(nextMonth).toLocaleString('en-us', {month: 'short'})
    const curentDay = new Date(curentDate).toLocaleString('en-us',{day:'numeric'})
    cy.xpath("//input[@placeholder='Choose Start Date']").eq(0).click()
    cy.get('span').contains(month).click()
    cy.get('span').contains(year).click()
    cy.get('a').contains(nextYear).click({force: true})
    cy.get('a').contains(month).click({force: true})
    // cy.get('a').contains(nextMonthFormat).click({force: true})
    cy.get('.svelte-1unzsxu').contains('7').click({force: true})
    cy.xpath("//input[@placeholder='Choose End Date']").eq(0).click()
    cy.get('span').contains(month).click()
    cy.get('span').contains(year).click()
    cy.get('a').contains(nextYear).click({force: true})
    cy.get('a').contains(month).click({force: true})
    cy.get('.svelte-1unzsxu').contains('7').click({force: true})
    }

  selectAdd() {
    cy.wait(3000)
    cy.get('[style="pl-4"] > :nth-child(1) > .btn').click({force: true})
  }

  sessionAddSuccess() {
    cy.wait(500).contains('Room Added')
  }
}

export default new BatchManagementPage();
