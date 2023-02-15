///<reference types = 'cypress'/>

describe('validate the login functionality',function(){

    it('Verify login functionality with valid cred',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.contains('Logged In Successfully').should('be.visible')
        cy.contains('Congratulations student. You successfully logged in!').should('have.text','Congratulations student. You successfully logged in!')
        cy.url().should('contain','https://practicetestautomation.com/logged-in-successfully/')
        cy.contains('Log out').should('be.visible')
    })
    it('Verify login functionality with invalid username and valid pass',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('stud')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })
    it('Verify login functionality with valid username and invalid pass',function(){
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Passwor')
        cy.get('#submit').click()
        cy.contains('Your password is invalid!').should('be.visible')
    })

})