describe('spec', () => {

  describe('Homepage', () => {
    beforeEach(() => {
      cy.visit('https://concert-crew.herokuapp.com/')
    })

    it('should have a title and login form', () => {
      cy.get('h1').contains('CONCERT CREW')
        .get('h2').contains('WELCOME! Please login')
        .get('.login-selection').should('exist')
    })

    it('should be able to select a user and login', () => {
      cy.get('.login-selection').select('Abby')
        .should('have.value', 'Abby')
        .intercept(`https://concert-crew-be-v2.herokuapp.com/`, {
          fixture: "user.json"
        })
        .get('.login-button').click().wait(1000)
    })

    it('should see a user\s dashboard after login', () => {
      cy.get('.login-selection').select('Abby')
        .intercept(`https://concert-crew-be-v2.herokuapp.com/`, {
        fixture: "user.json"
       })
        .get('.login-button').click().wait(1000)
        .get('.upcoming-shows-title').contains('ABBY\'S UPCOMING SHOWS')
        .get('.events-container')
        .get('.event-card').first().contains('JOAN MIRO')
    })

  })
})