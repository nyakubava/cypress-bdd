//const { when } = require("cypress/types/jquery")
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../PageObjects/MainPage'
import SearchPage from '../PageObjects/SearchPage'


Given('I navigate to the website', () => {
    ///cy.visit(' http://qalab.pl.tivixlabs.com/')
    MainPage.loadMainPage();

})

When('I select specific Country France, City Paris, Model Mazda 3 and Pic-up and Drop-Off Dates', () => {
    MainPage.selectCountryFr();
    MainPage.selectCityFr();
    MainPage.setModel();
    MainPage.setPicDate();
    MainPage.setDropDate();

})

And('Click on Search button', () => {
    MainPage.clickSearchButton();

})
Then('I can see selected rent cars for selected Country and City', () => {
    SearchPage.getSearchTable();
    SearchPage.getSearchForm();
    SearchPage.getFirstRow();




})