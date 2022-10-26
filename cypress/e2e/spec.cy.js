import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils'

describe('Homepage', () => {
    beforeEach(() => {
      cy.selectUser()
    })
    
    it('should have a title and login form', () => {
      cy.get('h1').contains('CONCERT CREW')
        .get('h2').contains('WELCOME! Please login')
        .get('.login-selection').should('exist')
    })

    it('should be able to select a user and login', () => {
      cy.get('.login-selection').select('Abby')
        .should('have.value', 'Abby')
        .get('.login-button').click().wait(1000)
    })

    it('should see a user\s dashboard after login with upcoming events', () => {
      cy.get('.login-selection').select('Abby')
        .get('.login-button').click().wait(1000)
        .get('.upcoming-shows-title').contains('ABBY\'S UPCOMING SHOWS')
        .get('.events-container').should('exist')
    })

    it('should see event cards that display the artist\'s name, date of the event, venue, and location', () => {
      cy.get('.login-selection').select('Abby')
        .get('.login-button').click().wait(1000)
        .url().should("be.equal", 'http://localhost:3000/Abby')
        .get('.event-card').first().contains('BONOBO')
        .get('.card-text').first().contains('10/22/2022')
        .get('.card-text').first().contains('Greek Theatre')
        .get('.card-text').first().contains('Los Angeles, CA')
    })

    it('should be able to view event details', () => {
      cy.get('.login-selection').select('Abby')
        .get('.login-button').click().wait(1000)
        .get('.view-details-button').first().click()
        .url().should("be.equal", 'http://localhost:3000/event/Z7r9jZ1AdogZP')
        .get('.details-photo').should('have.attr', 'src').should('include', 'https://s1.ticketm.net/dam/a/092/c590b21f-9adf-4f96-8a2d-2bb8f216d092_1701661_TABLET_LANDSCAPE_LARGE_16_9.jpg')
        .get('.details-photo').should('have.attr', 'alt').should('equal', 'Bonobo')
        .get('.details-text').contains('BONOBO')
        .get('.details-text').contains('Fri Oct 21 2022')
        .get('.details-text').contains('7:30 PM')
        .get('.mapid').should('exist')
    })

    it('should be able to view friends who are attending', () => {
      cy.get('.login-selection').select('Abby')
        .get('.login-button').click().wait(1000)
        .get('.view-details-button').first().click()
        .get('.friend-image').should('have.attr', 'src').should('equal', 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png')
        .get('.friend').first().contains('Mayu')
    })

    it('should be able to go back to the user dashboard', () => {
      cy.get('.login-selection').select('Abby')
        .get('.login-button').click().wait(1000)
        .get('.view-details-button').first().click()
        .get('.dashboard-btn').click()
        .url().should("be.equal", 'http://localhost:3000/Abby')
    })


  })