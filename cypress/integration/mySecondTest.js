/// <reference types="cypress" />

import jsonJson from '../fixtures/json.json'

describe('JSON Placeholder Testing', () => {
    it('responds with OK, has attributes, number of comments is 500', () => {
        cy.request('GET', jsonJson.url).as('comments')
        cy.get('@comments').should(response => {
            expect(response.status).to.eq(200) // OK
            
            expect(response.body).to.have.length(500)
        })
    })
})