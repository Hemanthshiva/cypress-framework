
Feature: Login Feature - Unhappy path

    #     Scenario Outline: Should be able to validate error messages for invalid credentials (Unhappy path)
    #         Given User is on the login page
    #         When User enters "<username>" and "<password>"
    #         And Clicks on the login button
    #         Then User should see the following "<errorMessage>"

    #         Examples:
    #             | username        | password        | errorMessage         |
    #             | strwqerwed_user | dfgtereterewrrt | Password is required |


    #     Scenario Outline: Should be able to login into the application with valid credentials (Unhappy path)
    #         Given User is on the login page
    #         When User enters "<username>" and "<password>"
    #         And Clicks on the login button
    #         Then User should land on the "/inventory" page

    #         Examples:
    #             | username     | password     |
    #             | swewerd_user | rweret_sauce |


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