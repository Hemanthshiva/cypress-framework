import { BasePage } from "./BasePage";

export class OveverviewPage extends BasePage {

    verifyCheckoutOverviewPage() {
        cy.url().should('include', '/checkout-step-two');
        cy.get('[data-test="payment-info-value"]').should('be.visible');
        cy.get('[data-test="payment-info-label"]').should('be.visible');
    }

    clickFinishButton() {
        cy.get('[data-test="finish"]').click();
    }
}