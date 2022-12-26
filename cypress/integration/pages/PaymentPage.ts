class PaymentPage {
  searchedCourseXpath =
    "(//h5[contains(text(), 'Course for purchase using automation')])[1]";
  enrollNowButtonXpath = "(//button[.='Enroll Now'])[3]";
  goToPaymentButtonXpath = "//button[. = 'Goto payment options']";
  submitPaymentXpath = "//button[.='Pay now']";
  paymentSuccessXpath = "//h2[contains(text(),'Payment Successful')]";
  bookATrialButtonXpath = "(//button[.='Book a Trial Session'])[3]";
  inputDateXpath = "//input[@placeholder = 'Select date and time']";
  selectDateXpath = "//span[@class='flatpickr-day nextMonthDay'][4]";
  selectDivXpath = "//div[2]/div[1]/div/div/div[2]/div/div[2]";
  bookATrialButton1Xpath = "//button[contains(text(),'Book A Trial')]";

  checkCourseVisibility() {
    cy.wait(4000);
    cy.xpath(this.searchedCourseXpath).should("be.visible");
    cy.xpath(this.searchedCourseXpath).click({ force: true });
  }

  enrollNow() {
    cy.xpath(this.enrollNowButtonXpath).scrollIntoView().click({ force: true });
  }

  selectGotoPayment() {
    cy.xpath(this.goToPaymentButtonXpath).click();
  }

  enterCardDetails() {
    cy.wait(12000);
    cy.get("iframe").iframe(() => {
      // Targets the input within the iframe element
      cy.get("[name='cardnumber']").type("4242 4242 4242 4242");
      cy.get("[name='exp-date']").type("02/23");
      cy.get("[name='cvc']").type("123");
      cy.get("[name='postal']").type("45814");
    });
  }

  submitPayment() {
    cy.xpath(this.submitPaymentXpath).click({ force: true });
  }

  paymentSuccess() {
    cy.wait(12000);
    cy.contains("Payment Successful");
  }

  selectBookATrialButton() {
    cy.xpath(this.bookATrialButtonXpath).click({ force: true });
  }

  inputDate() {
    cy.xpath(this.inputDateXpath).click();
    cy.xpath(this.selectDateXpath).click();
    // cy.xpath(this.selectDivXpath).click();
  }

  selectBookATrialButton1() {
    cy.xpath(this.bookATrialButton1Xpath).click({ force: true });
  }

  selectCreditDebitButton() {
    cy.wait(5000);
    cy.xpath("//button[contains(text(),'Pay via Credit/Debit card')]").click();
  }
}
export default new PaymentPage();
