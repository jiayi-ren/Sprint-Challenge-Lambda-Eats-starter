import {v4 as uuid} from 'uuid'

const url = "http://localhost:3000/"
const text = uuid()

describe('Lambda Eats Test', ()=>{
    it('can navigate to the site', () => {
        cy.visit(url)
        cy.url().should('include', 'localhost')
    })
    it('can navigate to the order site', () => {
        cy.get('button[name="order"]')
            .click()
        cy.url().should('include', 'pizza')
    })
    it('can add text for Special Instructions', ()=>{
        cy.get('input[name="special"]')
            .type(text)
            .should('have.value', text)
    })
    it('can select multiple options from Toppings', ()=>{
        cy.get('input[name="pepperoni"]')
            .check()
            .should('have.checked')
        cy.get('input[name="sausage"]')
            .check()
            .should('have.checked')
        cy.get('input[name="bacon"]')
            .check()
            .should('have.checked')
        cy.get('input[name="itSausage"]')
            .check()
            .should('have.checked')
    })
    it('can submit order form', ()=>{
        cy.get('button[name="submit"]')
            .click()
        cy.get('body')
            .contains(text)
            .contains("pepperoni")
            .contains("sausage")
            .contains("bacon")
            .contains("itSausage")
    })
})