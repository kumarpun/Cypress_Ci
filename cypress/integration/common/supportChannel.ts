import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { SupportChannelPage } from "../pages/Page";

When("the user select chat operations option from the dropdown", () => {
    SupportChannelPage.selectChatOperations();
});

When("the user select create button", () => {
    SupportChannelPage.selectCreateButton();
});

When("the user add channel name", () => {
    SupportChannelPage.inputChannelName();
});

When("the user add channel description", () => {
    SupportChannelPage.inputDescription();
});

When("the user select add user button", () => {
    SupportChannelPage.selectAddButton();
});

When("the user add user in channel", () => {
    SupportChannelPage.addUserInBatch();
});

When("the user click create channel button", () => {
    SupportChannelPage.selectCreateChannelButton();
});

Then("the channel should be created", () => {
    SupportChannelPage.createChannelsuccess();
});