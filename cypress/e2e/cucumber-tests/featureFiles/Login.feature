Feature: Login Feature

    Scenario Outline: Should be able to validate error messages for invalid credentials
        Given User is on the login page
        When User enters "<username>" and "<password>"
        And Clicks on the login button
        Then User should see the following "<errorMessage>"

        Examples:
            | username        | password     | errorMessage                                                |
            | standard_user   | paerowier    | Username and password do not match any user in this service |
            | locked_out_user | secret_sauce | Sorry, this user has been locked out.                       |
            |                 | secret_sauce | Username is required                                        |
            | standard_user   |              | Password is required                                        |


    Scenario Outline: Should be able to login into the application with valid credentials
        Given User is on the login page
        When User enters "<username>" and "<password>"
        And Clicks on the login button
        Then User should land on the "/inventory" page

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |
            | visual_user   | secret_sauce |


    # Scenario Outline: Should be able to validate error messages for invalid credentials (Unhappy path)
    #     Given User is on the login page
    #     When User enters "<username>" and "<password>"
    #     And Clicks on the login button
    #     Then User should see the following "<errorMessage>"

    #     Examples:
    #         | username        | password        | errorMessage         |
    #         | strwqerwed_user | dfgtereterewrrt | Password is required |


    # Scenario Outline: Should be able to login into the application with valid credentials (Unhappy path)
    #     Given User is on the login page
    #     When User enters "<username>" and "<password>"
    #     And Clicks on the login button
    #     Then User should land on the "/inventory" page

    #     Examples:
    #         | username     | password     |
    #         | swewerd_user | rweret_sauce |