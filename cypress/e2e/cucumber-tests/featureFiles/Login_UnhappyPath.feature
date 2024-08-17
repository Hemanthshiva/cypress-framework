
Feature: Login Feature - Unhappy path

    Scenario Outline: Should be able to validate error messages for invalid credentials (Unhappy path)
        Given User is on the login page
        When User enters "<username>" and "<password>"
        And Clicks on the login button
        Then User should see the following "<errorMessage>"

        Examples:
            | username        | password        | errorMessage         |
            | strwqerwed_user | dfgtereterewrrt | Password is required |


    Scenario Outline: Should be able to login into the application with valid credentials (Unhappy path)
        Given User is on the login page
        When User enters "<username>" and "<password>"
        And Clicks on the login button
        Then User should land on the "/inventory" page

        Examples:
            | username     | password     |
            | swewerd_user | rweret_sauce |