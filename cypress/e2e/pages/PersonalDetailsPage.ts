import { BasePage } from "./BasePage";
import { DataTable } from "cucumber";

export class PersonalDetailsPage extends BasePage {

    locators = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continue: '[data-test="continue"]'
    }

    fillPersonalDetails(dataTable: DataTable) {
        const details = dataTable.rawTable[1];
        cy.get(this.locators.firstName).type(details[0]);
        cy.get(this.locators.lastName).type(details[1]);
        cy.get(this.locators.postalCode).type(details[2]);
    }

    clickOnContinue() {
        cy.get(this.locators.continue).click();
    }
}