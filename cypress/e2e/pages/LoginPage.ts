import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    locators = {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessage: '[data-test="error"]'
    }


    navigateToLoginPage() {
        this.navigateTo(Cypress.env('baseUrl'));
    }

    enterCredentials(username: string, password: string) {
        const usernameInput = cy.get(this.locators.username);
        const passwordInput = cy.get(this.locators.password);

        if (username.length !== 0) {
            usernameInput.type(username, { force: true });
        }

        if (password.length !== 0) {
            passwordInput.type(password, { force: true });
        }
    }

    clickLoginButton() {
        cy.get(this.locators.loginButton).click();
    }

    verifyErrorMessage(errorMessage: string) {
        cy.get(this.locators.errorMessage).should('contain.text', errorMessage);
    }
}
