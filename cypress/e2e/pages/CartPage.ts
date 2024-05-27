import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    locators = {
        cartItems: '[data-test="inventory-item"]',
        checkoutButton: '[data-test="checkout"]'
    }

    verifyCartPage() {
        cy.url().should('include', '/cart');
    }

    verifyItemsInCart(numItems: string) {
        cy.get(this.locators.cartItems).should('have.length', numItems);
    }

    clickOnCheckout() {
        cy.get(this.locators.checkoutButton).click();
    }
}
