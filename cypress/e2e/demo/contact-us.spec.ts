describe('Test Contact Us form on webdriver.university', () => {


    let userDetails: any;

    before(() => {
        cy.viewport('iphone-8');
        cy.fixture('example').then((user) => {
            userDetails = user;
        });
    });

    it('should be able to submit successful contact us form', () => {

        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[name="first_name"]').type(userDetails.first_name);
        cy.get('[name="last_name"]').type(userDetails.last_name);
        cy.get('[name="email"]').type(userDetails.email);
        cy.get('[name="message"]').type(userDetails.body);
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