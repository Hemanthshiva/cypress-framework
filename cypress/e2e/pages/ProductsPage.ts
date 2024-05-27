import { BasePage } from "./BasePage";
import { DataTable } from 'cucumber';

export class ProductsPage extends BasePage {

    locators = {    
        productSortContainer: '[data-test="product-sort-container"]',
        inventoryItemName: '[data-test="inventory-item-name"]',
        inventoryItemPrice: '[data-test="inventory-item-price"]',
        inventoryItemAddButton: '.btn_primary',
        shoppingCartBadge: '[data-test="shopping-cart-badge"]',
        shoppingCartLink: '[data-test="shopping-cart-link"]'
    };

    sortProductsBy(option: string) {
        cy.get(this.locators.productSortContainer).select(option);
    }

    verifyProductsSorted(dataTable: DataTable) {
        const products = dataTable.rawTable.slice(1);

        products.forEach(([first, last]: any, index: number) => {
            cy.get('.inventory_list .inventory_item')
                .eq(index * 2)
                .should('contain', first);


            cy.get('.inventory_list .inventory_item')
                .eq(index * 2 - 1)
                .should('contain', last);
        });
    }

    addProductToCart(product: string) {
        cy.get(this.locators.inventoryItemName).contains(product)
            .parentsUntil('.inventory_item').find('.btn_primary').click();
    }

    verifyProductAddedToCart() {
        cy.get(this.locators.shoppingCartBadge).should('be.visible');
    }

    verifyProductsInCartCount(numItems: string) {
        cy.get(this.locators.shoppingCartBadge).should('have.text', numItems);
    }

    navigateToCart() {
        cy.get(this.locators.shoppingCartLink).click();
    }
}