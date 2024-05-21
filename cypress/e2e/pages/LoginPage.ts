import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    navigateToLoginPage() {
        this.navigateTo('/');
    }

    enterCredentials(username: string, password: string) {
        const usernameInput = cy.get('[data-test="username"]');
        const passwordInput = cy.get('[data-test="password"]');

        if (username.length !== 0) {
            usernameInput.type(username, { force: true });
        }

        if (password.length !== 0) {
            passwordInput.type(password, { force: true });
        }
    }

    clickLoginButton() {
        cy.get('[data-test="login-button"]').click();
    }

    verifyErrorMessage(errorMessage: string) {
        cy.get('[data-test="error"]').should('contain.text', errorMessage);
    }
}
