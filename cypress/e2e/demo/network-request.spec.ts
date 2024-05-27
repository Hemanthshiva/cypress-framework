describe('Network Requests', () => {

    let message = 'Not Found';

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Get request', () => {
        cy.intercept('GET', '**/comments/*',
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: 'Using GET in cy.intercept()',
                    email: 'pQbY3@example.com',
                    body: 'some test comment'
                }
            }).as('getComment');

        cy.get('.network-btn').click();
        cy.wait('@getComment').should(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('postId', 1);
            expect(response.body).to.have.property('email', 'pQbY3@example.com');
        });

    })

    it('Post request', () => {
        cy.intercept('POST', '**/comments', {
            body: {
                postId: 1,
                id: 1,
                name: 'Using POST in cy.intercept()',
                email: 'pQbY3@example.com',
                body: 'some test comment'
            }
        }).as('postComment');

        cy.get('.network-post').click();

        cy.wait('@postComment').should(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('postId', 1);
            expect(response.body).to.have.property('email', 'pQbY3@example.com');

        })
    })

    it('Put request', () => {
        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
        }, {
            statusCode: 404,
            body: { error: message },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
        }).as('putComment')

        cy.get('.network-put').click();
        cy.wait('@putComment').should(({ response }) => {
            expect(response.statusCode).to.equal(404);
            expect(response.body).to.have.property('error', message);
        });
        cy.get('.network-put-comment').should('contain', 'Not Found');
    })
})