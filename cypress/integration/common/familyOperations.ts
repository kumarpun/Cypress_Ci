import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { FamilyOperationsPage } from "../pages/Page";

When("the user select family operations option from the dropdown", () => {
    FamilyOperationsPage.selectFamilyOperations();
});