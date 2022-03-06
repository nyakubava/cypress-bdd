class SummaryPage {

    static getSummaryBlock() {
        return cy.get('.col-md-4')
    }
    static getSummaryRentForm() {
        return cy.get('#rent_form')
    }
    static getSummaryName() {
        return cy.get('#name')
    }
    static setSummaryName() {
        cy.get('#name').type('Test')
    }
    static getSummaryLastName() {
        return cy.get('#last_name')

    }
    static setSummaryLastName() {
        cy.get('#last_name').type('Test')
    }

    static getSummaryCardNumber() {
        return cy.get('#card_number')
    }
    static setSummaryCardNumber() {
        cy.get('#card_number').type('1234123412341234')
    }

    static getSummaryEmail() {
        return cy.get('#email')

    }
    static setSummaryEmail() {
        cy.get('#email').type('test@test.com')
    }

    static clickSummaryRentButton() {
        cy.get('.btn-primary').click()
    }
    static getAlertName() {
        return cy.get('.alert-danger').contains('Name is required')
    }
    static getAlertLastName() {
        return cy.get('.alert-danger').contains('Last name is required')
    }
    static getAlertEmail() {
        return cy.get('.alert-danger').contains('Email is required')
    }
    static getAlertCard() {
        return cy.get('.alert-danger').contains('Card number is required')
    }


}




export default SummaryPage