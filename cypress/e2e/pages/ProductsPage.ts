import { BasePage } from "./BasePage";
import { DataTable } from 'cucumber';

export class ProductsPage extends BasePage {

    sortProductsBy(option: string) {
        cy.get('[data-test="product-sort-container"]').select(option);
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
        cy.get('[data-test="inventory-item-name"]').contains(product)
            .parentsUntil('.inventory_item').find('.btn_primary').click();
    }

    verifyProductAddedToCart() {
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
    }

    verifyProductsInCartCount(numItems: string) {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', numItems);
    }

    navigateToCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }
}