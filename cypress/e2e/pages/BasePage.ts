export class BasePage {

    navigateTo(url: string) {
        cy.visit(url, { failOnStatusCode: false });
    }

    verifyPage(url: string) {
        cy.url().should('include', url);
    }
}