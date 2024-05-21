import { BasePage } from "./BasePage";

export class CheckoutCompletePage extends BasePage {

    verifyCheckoutCompletePage() {
        cy.url().should('include', '/checkout-complete');
        cy.get('.complete-header').should('be.visible');
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    }

}