describe('example template spec', () => {
    afterEach(() => {
        throw new Error('after each error')
    })
    it('1. example passes', () => {
        cy.visit('https://example.cypress.io')
    })

    it('2. example fails', () => {
        cy.visit('https://example.cypress.io')
        expect(true).to.equal(false)
    })

    it('3. example passes', () => {
        cy.visit('https://example.cypress.io')
    })
})