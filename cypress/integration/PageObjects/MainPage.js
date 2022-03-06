class MainPage {

    static loadMainPage() {
        cy.visit('http://qalab.pl.tivixlabs.com/');
    }
    static getSearchForm() {
        return cy.get('#search_form');
    }

    static selectCountryFr() {
        cy.get('#country').select('France');
    }
    static selectCityFr() {
        cy.get('#city').select('Paris');
    }
    static selectCountryPl() {
        cy.get('#country').select('Poland');
    }
    static selectCityPl() {
        cy.get('#city').select('Cracow'); //BR#11
    }

    static setModel() {
        cy.get('#model').type('Mazda 3');
    }
    static setModelO() {
        cy.get('#model').type('Scoda Octaia');
    }
    static setPicDate() {
        cy.get('#pickup').type('2022-06-06');
        // cy.contains('Today').click();
    }
    static setDropDate() {
        cy.get('#dropoff').type('2022-07-06');
        ///cy.contains('Today').click();
    }

    static clickSearchButton() {
        cy.get('.btn-primary').click();
    }

    static clickHomeButton() {
        cy.get('.nav-link').click();
    }

    static getHomeButton() {
        return cy.get('.sr-only');
    }

}



export default MainPage;