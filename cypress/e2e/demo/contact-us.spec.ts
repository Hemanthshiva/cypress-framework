describe('Test Contact Us form on webdriver.university', () => {

    it('should be able to submit successful contact us form', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('johndoe@me.com');
        cy.get('[name="message"]').type('This is a test message');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it('should not be able to submit contact us form if any field is empty', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Error: all fields are required.')
        })
    })


    it('should be able to navigate to contact us page from home page', () => {
        cy.visit('https://automationteststore.com/index.php');
        cy.xpath("//a[contains(text(),'Contact Us')]").click(); 
    })       
})