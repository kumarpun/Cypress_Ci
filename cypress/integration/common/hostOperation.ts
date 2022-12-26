import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { HostOperationPage } from "../pages/Page";

When("the user select host operations option from the dropdown", () => {
    HostOperationPage.selectHostOperations();
});

When("the user search and select host", () => {
    HostOperationPage.searchHost();
});

When("the user select Suspended label", () => {
    HostOperationPage.selectSuspendedLabel();
});

Then("the suspended host list should be display", () => {
    HostOperationPage.suspendedVisibility();
});

When("the user select view host category label", () => {
    HostOperationPage.selectViewHostCategory();
});