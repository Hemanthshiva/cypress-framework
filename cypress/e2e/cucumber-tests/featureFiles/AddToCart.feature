Feature: Add products to Cart

    User should be able to add products to cart


    Background:
        Given User is on the login page
        When User enters valid credentials
            | username      | password     |
            | standard_user | secret_sauce |
        And Clicks on the login button
        Then User should land on the "/inventory" page

    Scenario: Sort products in low to high price order and verify
        When User selects "Price (low to high)" from the sort by dropdown
        Then Products should be sorted in below order
            | first             | last                     |
            | Sauce Labs Onesie | Sauce Labs Fleece Jacket |

    @test
    Scenario: Add product to cart and proceed to checkout
        When User adds "Sauce Labs Backpack" to the cart
        And User adds "Sauce Labs Onesie" to the cart
        Then The products should be added to the shopping cart
        And The cart should have "2" items
        When User clicks on the shopping cart button
        Then User should land on the "/cart" page
        When User clicks on the checkout button
        Then User should land on the "/checkout-step-one" page
        And User should fill personal details
            | firstName | lastName | zipCode |
            | John      | Doe      | 12345   |
        When User clicks on the continue button
        Then User should land on the "/checkout-step-two" page
        And User should verify the payment details
        When User clicks on the finish button
        Then User should land on the "/checkout-complete" page
        And The order should be completed successfully