import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { AppPage } from "../../pages/Page";

const app = new AppPage();

When("the user select message board menu", () => {
    app.staffMessageboard.messageBoardMenu();
});

When("the user select class from dropdown", () => {
    app.staffMessageboard.selectClass();
});

When("the user select set class button", () => {
    app.staffMessageboard.setClass();
});

When("the user enter text in text area", () => {
    app.staffMessageboard.enterText();
});

When("the user select post button", () => {
    app.staffMessageboard.postButton();
});

When("the user select banner tab", () => {
    app.staffMessageboard.bannerTab();
});

When("the user select arrow icon", () => {
    app.staffMessageboard.arrowIcon();
});

When("the user select particular banner", () => {
    app.staffMessageboard.selectBanner();
});

When("the user select tag tab", () => {
    app.staffMessageboard.tagTab();
});

When("the user search student name", () => {
    app.staffMessageboard.searchStudent();
});

When("the user click student to tag", () => {
    app.staffMessageboard.selectStudentForTag();
});

When("the user select feeling", () => {
    app.staffMessageboard.selectFeeling();
});

When("the user select gif tab", () => {
    app.staffMessageboard.gifTab();
});

When("the user enter gif name", () => {
    app.staffMessageboard.inputSearchGif();
});

When("the user select searched gif", () => {
    app.staffMessageboard.selectGif();
});

When("the user select photo tab", () => {
    app.staffMessageboard.selectPhotoTab();
});

When("the user upload photo", () => {
    app.staffMessageboard.uploadPhoto();
});

Then("the user validates message board page", () => {
    app.staffMessageboard.messageBoardTextVisibility();
});

Then("the entered post should be posted", () => {
    app.staffMessageboard.postDataVisibility();
});

Then("the banner post should be posted", () => {
    app.staffMessageboard.bannerPostedVisibility();
});

Then("the feeling post should be posted", () => {
    app.staffMessageboard.feelingPostVisibility();
});

Then("the tag post should be posted", () => {
    app.staffMessageboard.tagSuccessVisibility();
});

Then("the gif post should be posted", () => {
    app.staffMessageboard.gifSuccessVisibility();
});

Then("the image post should be posted", () => {
    app.staffMessageboard.imagePostSucess();
});