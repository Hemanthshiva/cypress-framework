import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const baseApiEndpoint = Cypress.env('apiBaseUrl');

let requestBody: any;
let response: Cypress.Response<any>;
let responseBody: any;

Given('I have a valid request body with', (dataTable) => {
    const data = dataTable.hashes()[0];
    const { name, job } = data;
    requestBody = {
        name: name,
        job: job
    }
    cy.log(JSON.stringify(requestBody));
});

When('I send a {string} request to {string} endpoint with the request body', (method: string, endpoint: string) => {
    cy.request({
        method,
        url: baseApiEndpoint + endpoint,
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((res) => {
        response = res;
        responseBody = res.body;
        cy.log(JSON.stringify(responseBody));
    });
});

Then('I should receive "{int}" status code', (expectedStatusCode: number) => {
    expect(response.status).to.eq(expectedStatusCode);
});

Then('the response should contain the user id', () => {
    cy.log(`The user id is ${responseBody.id}`);
    expect(responseBody.id).be.not.empty.and.be.a('number');
});

Then('The user should be updated', () => {
    expect(responseBody.name).to.equal(requestBody.name);
    expect(responseBody.job).to.equal(requestBody.job);
});