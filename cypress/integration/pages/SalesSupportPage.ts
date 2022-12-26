class SalesSupportPage {
  dropDownXpath = "[name='modules']";
  abandonedListSXpath = "//td[.='1']";
  createDiscountLinkXpath = "//button[contains(text(),'Create')]";
  dateXpath = "(//a[@class='svelte-1unzsxu outsider'])[30]";
  usdDiscountSelector = "[name='amount.USD']";
  generateCodeButtonXpath = "(//p[contains(text(),'Generate Code')])[1]";
  saveButtonXpath = "//button[contains(text(),'Save')]";
  couponListLinkXpath = "//div[contains(text(),'Coupon List')]";
  CouponInformationTitle = "Coupon Information";
  labelSelector = "[name='hasLabel']";
  submitSelector = "[type='submit']";
  inrDiscountSelector = "[name='amount.INR']";

  selectSalesSupport() {
    cy.wait(5000);
    cy.get(this.dropDownXpath).select("Sales Support", { force: true });
  }

  abandonedCartListVisibility() {
    cy.wait(4000);
    cy.xpath(this.abandonedListSXpath).should("be.visible");
  }

  selectCreateDiscountLink() {
    cy.xpath("//div[contains(text(),'Coupon List')]").click()
    cy.xpath(this.createDiscountLinkXpath).click({force: true});
  }

  selectDate() {
    cy.xpath(this.dateXpath).click();
  }

  inputUsdDiscount() {
    cy.get(this.usdDiscountSelector).clear();
    cy.get(this.usdDiscountSelector).type("20");
  }

  inputLabel() {
    cy.get("[name='label']").type("1");
  }

  selectGenerateCodeButton() {
    cy.xpath(this.generateCodeButtonXpath).click();
  }

  inputRedemptions() {
    cy.get("[name='totalRedemptions']").clear();
    cy.get("[name='totalRedemptions']").type("5");
  }

  saveButton() {
    cy.xpath(this.saveButtonXpath).click();
  }

  couponSuccess() {
    cy.contains("Discount coupon added successfully");
  }

  selectCouponListLink() {
    cy.xpath(this.couponListLinkXpath).click();
  }

  selectCouponData() {
    cy.xpath(this.abandonedListSXpath).click();
  }

  CouponInformation() {
    cy.contains(this.CouponInformationTitle);
  }

  searchLabel() {
    cy.get(this.labelSelector).type("1");
  }

  selectSubmitButton() {
    cy.get(this.submitSelector).click();
  }

  inputINRDiscount() {
    cy.get(this.inrDiscountSelector).clear();
    cy.get(this.inrDiscountSelector).type("20");
  }
}

export default new SalesSupportPage();
