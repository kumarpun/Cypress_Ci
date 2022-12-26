import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { SalesSupportPage } from "../pages/Page";

When("the user select sales support option from the dropdown", () => {
  SalesSupportPage.selectSalesSupport();
});

Then("the table list should be display", () => {
  SalesSupportPage.abandonedCartListVisibility();
});

When("the user select create discount coupon link", () => {
  SalesSupportPage.selectCreateDiscountLink();
});

When("the user select expire date", () => {
  SalesSupportPage.selectDate();
});

When("the user enter usd discount amount", () => {
  SalesSupportPage.inputUsdDiscount();
});

When("the user enter label", () => {
  SalesSupportPage.inputLabel();
});

When("the user generate code", () => {
  SalesSupportPage.selectGenerateCodeButton();
});

When("the user enter total redemptions", () => {
  SalesSupportPage.inputRedemptions();
});

When("the user select coupon list link", () => {
  SalesSupportPage.selectCouponListLink();
});

When("the user select coupon data", () => {
  SalesSupportPage.selectCouponData();
});

When("the user enter data on label field", () => {
  SalesSupportPage.searchLabel();
});

When("the user select search button", () => {
  SalesSupportPage.selectSubmitButton();
});

When("the user enter INR discount amount", () => {
  SalesSupportPage.inputINRDiscount();
});

Then("the coupon should be created", () => {
  SalesSupportPage.couponSuccess();
});

Then("the coupon list should be visible", () => {
  SalesSupportPage.abandonedCartListVisibility();
});

Then("the coupon information should be visible", () => {
  SalesSupportPage.CouponInformation();
});
