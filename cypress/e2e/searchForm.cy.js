import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils'

describe('Dashboard', () => {
    beforeEach(() => {
      cy.selectUser()
        .intercept("GET", "https://concert-crew-be-v2.herokuapp.com/api/v1/events?keyword=John%20Summit", {
        fixture: "/events.json",
      }).as("events");
    })

    it('should be able to search for upcoming events', () => {
      cy.visit("http://localhost:3000/search");
      cy.get('input').type('John Summit')
      .get('.search-btn').click()
      .get('.event-card').last().contains('JOHN SUMMIT')
      .get('.card-text').last().contains('12/22/2022')
      .get('.card-text').last().contains('Mission Ballroom')
      .get('.card-text').last().contains('Denver, CO')
    })

    it('should not be able to search if the input is blank', () => {
      cy.visit("http://localhost:3000/search")
        .get('.search-btn').click()
        .get('.search-results-container').contains('Please type in an artist')
    })

    it('should let user know if there are no upcoming events', () => {
      cy.visit("http://localhost:3000/search")
        .get('input').type('iekdna')
        .get('.search-btn').click()
        .get('.search-results-container').contains('No events found . . .')
    })

  })


  