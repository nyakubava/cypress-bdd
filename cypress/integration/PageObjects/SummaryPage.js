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

}




export default SummaryPage