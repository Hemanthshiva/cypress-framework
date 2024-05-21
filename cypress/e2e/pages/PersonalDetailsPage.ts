import { BasePage } from "./BasePage";
import { DataTable } from "cucumber";

export class PersonalDetailsPage extends BasePage {

    fillPersonalDetails(dataTable: DataTable) {
        const details = dataTable.rawTable[1];
        cy.get('[data-test="firstName"]').type(details[0]);
        cy.get('[data-test="lastName"]').type(details[1]);
        cy.get('[data-test="postalCode"]').type(details[2]);
    }

    clickOnContinue() {
        cy.get('[data-test="continue"]').click();
    }
}