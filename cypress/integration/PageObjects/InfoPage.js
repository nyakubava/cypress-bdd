class InfoPage {


    static getInfoBlock() {
        return cy.get('.card-body')
    }
    static getInfoHeader() {
        return cy.get('.card-header').contains('Mazda 3')

    }
    static getInfoLocation() {
        return cy.get('.card-text').contains('Location: France, Paris')
    }

    static getInfoLocationP() {
        return cy.get('.card-text').contains('Location: Poland, Cracow')
    }

    static getInfoHeaderO() {
        return cy.get('.card-header').contains('Skoda Octavia')

    }

    static clickRentButton() {
        cy.get('.btn-primary').click()

    }

}




export default InfoPage