import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    verifyCartPage() {
        cy.url().should('include', '/cart');
    }

    verifyItemsInCart(numItems: string) {
        cy.get('[data-test="inventory-item"]').should('have.length', numItems);
    }

    clickOnCheckout() {
        cy.get('[data-test="checkout"]').click();
    }
}
