import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage {

    locators = {
        completeHeader: '[data-test="complete-header"]'
    }

    verifyCheckoutCompletePage() {
        cy.url().should('include', '/checkout-complete');
        cy.get(this.locators.completeHeader).should('be.visible');
        cy.get(this.locators.completeHeader).should('have.text', 'Thank you for your order!');
    }

}