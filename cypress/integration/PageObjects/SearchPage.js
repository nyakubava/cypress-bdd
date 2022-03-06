class SearchPage {

    static getSearchTable() {
        return cy.get('#search-results');
    }

    static getSearchForm() {
        return cy.get('#search_form');
    }

    static getHomeButton() {
        return cy.get('.sr-only');
    }

    static getFirstRow() {
        return cy.get('tr>td').contains('1'); //BR#07
    }

    static clickRentButton() {
        return cy.get('td>a[href="/details/1"]').click();
    }
    static clickRentButton() {
        return cy.get('td>a[href="/details/1"]').click();
    }
    static clickRentButton2() {
        return cy.get('td>a[href="/details/2"]').click(); ///BR#13
    }

}
export default SearchPage