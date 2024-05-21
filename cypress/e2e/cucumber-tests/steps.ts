import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { PersonalDetailsPage } from "../pages/PersonalDetailsPage";
import { OveverviewPage } from "../pages/OverviewPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";


let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let personalDetailsPage: PersonalDetailsPage;
let overviewPage: OveverviewPage;
let checkoutCompletePage: CheckoutCompletePage;

Before(() => {
    loginPage = new LoginPage();
    productsPage = new ProductsPage();
    cartPage = new CartPage();
    personalDetailsPage = new PersonalDetailsPage();
    overviewPage = new OveverviewPage();
    checkoutCompletePage = new CheckoutCompletePage();
})

Given("User is on the login page", () => {
    loginPage.navigateToLoginPage();
});

When("User enters valid credentials", (dataTable) => {
    const data = dataTable.hashes()[0];
    const { username, password } = data;

    loginPage.enterCredentials(username, password);
});

When("Clicks on the login button", () => {
    loginPage.clickLoginButton();
});

When("User enters {string} and {string}", (username, password) => {
    loginPage.enterCredentials(username, password);
});

Then("User should see the following {string}", (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage);
});

Then("User should land on the {string} page", (pageRoute) => {
    loginPage.verifyPage(pageRoute);
});

When('User selects {string} from the sort by dropdown', (option) => {
    productsPage.sortProductsBy(option);
});

Then('Products should be sorted in below order', (dataTable) => {
    productsPage.verifyProductsSorted(dataTable);
});

When('User adds {string} to the cart', (product) => {
    productsPage.addProductToCart(product);
});

Then('The products should be added to the shopping cart', () => {
    productsPage.verifyProductAddedToCart();
});

And('The cart should have {string} items', (numItems) => {
    productsPage.verifyProductsInCartCount(numItems);
});

When('User clicks on the shopping cart button', () => {
    productsPage.navigateToCart();
});

When('User clicks on the checkout button', () => {
    cartPage.verifyCartPage();
    cartPage.clickOnCheckout();
});

And('User should fill personal details', (dataTable) => {
    personalDetailsPage.fillPersonalDetails(dataTable);
});

And('User clicks on the continue button', () => {
    personalDetailsPage.clickOnContinue();
});

And('User should verify the payment details', () => {
    overviewPage.verifyCheckoutOverviewPage();
});

And('User clicks on the finish button', () => {
    overviewPage.clickFinishButton();
});

And('The order should be completed successfully', () => {
    checkoutCompletePage.verifyCheckoutCompletePage();
});