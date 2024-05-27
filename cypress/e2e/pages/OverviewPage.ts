import { BasePage } from "./BasePage";

export class OveverviewPage extends BasePage {

    locators = {
        paymentValue: '[data-test="payment-info-value"]',
        paymentLabel: '[data-test="payment-info-label"]',
        finishButton: '[data-test="finish"]'
    }

    verifyCheckoutOverviewPage() {
        cy.url().should('include', '/checkout-step-two');
        cy.get(this.locators.paymentValue).should('be.visible');
        cy.get(this.locators.paymentLabel).should('be.visible');
    }

    clickFinishButton() {
        cy.get(this.locators.finishButton).click();
    }
}