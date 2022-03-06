import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../PageObjects/MainPage'
import SearchPage from '../PageObjects/SearchPage'
import InfoPage from '../PageObjects/InfoPage'


Given('I navigate to the website', () => {
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
    //blocked BR#07
And('I can see rent car for selected Country and City', () => {
    SearchPage.getSearchTable();
    SearchPage.getSearchForm();
    SearchPage.getFirstRow();

})
And('I click on Rent button for selected car', () => {

    SearchPage.clickRentButton();
})

Then('I can verify if Location is France, Paris and car is Mazda 3 and return to the main page', () => {
    InfoPage.getInfoBlock();
    InfoPage.getInfoHeader();
    InfoPage.getInfoLocation();
    MainPage.clickHomeButton();
    MainPage.getSearchForm();

})