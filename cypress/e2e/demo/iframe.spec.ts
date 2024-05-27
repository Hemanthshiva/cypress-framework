describe('Test IFrames', () => {
    it('should be able to interact with an iframe', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html');
        cy.get('#singleframe').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        });
        cy.get('@iframe').find('input').as('editbox');
        cy.get('@editbox').should('be.visible');
        cy.get('@editbox').type('Hello World');
        cy.get('@editbox').should('contain.value', 'Hello World');
    });


    it('should be able to interact with an iframe using iframe tag', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html');

        cy.frameLoaded('#singleframe');
        cy.iframe('#singleframe').find('input').as('editbox');
        cy.get('@editbox').should('be.visible');
        cy.get('@editbox').type('Hello World');
        cy.get('@editbox').should('contain.value', 'Hello World');
    });

    it('should be able to interact with an iframe using iframe tag', () => {   
        cy.visit('https://demo.automationtesting.in/Frames.html');
        cy.frameLoaded('#singleframe');
        cy.iframe('#singleframe').find('input').as('editbox');
        cy.get('@editbox').should('be.visible');
        cy.get('@editbox').type('Hello World');
        cy.get('@editbox').should('contain.value', 'Hello World');  
     })
});