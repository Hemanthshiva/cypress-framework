@api
Feature: Api Tests

    Feature Description : Api Tests for the application


    Scenario: Create a POST request to create a new post
        Given I have a valid request body with
            | name | job       |
            | Tony | Developer |
        When I send a "POST" request to "/users" endpoint with the request body
        Then I should receive "201" status code
        And the response should contain the user id


    Scenario: Create a PUT request to update an existing post
        Given I have a valid request body with
            | name | job       |
            | Tony | Developer |
        When I send a "PUT" request to "/users/21" endpoint with the request body
        Then I should receive "200" status code
        And The user should be updated
