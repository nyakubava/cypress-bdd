import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import MainPage from '../PageObjects/MainPage'
import SearchPage from '../PageObjects/SearchPage'
import InfoPage from '../PageObjects/InfoPage'
import SummaryPage from '../PageObjects/SummaryPage'

Given('I navigate to the website', () => {
    MainPage.loadMainPage();
})
When('I select specific Country Poland, City Krakow, Model Skoda Octavia and Pic-up and Drop-Off Dates', () => {
    MainPage.selectCountryPl();
    MainPage.selectCityPl();
    MainPage.setModelO();
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
    SearchPage.clickRentButton2();
})
And('I can verify if Location is Poland, Krakow and car is Skoda Octavia', () => {
    InfoPage.getInfoBlock();
    InfoPage.getInfoHeaderO();
    InfoPage.getInfoLocationP();
})
And('I can click on Rent button', () => {
    InfoPage.clickRentButton();
})
And('I can click on Rent button', () => {
    InfoPage.clickRentButton();
})
And('I can see text fields for personal information', () => {
    SummaryPage.getSummaryBlock();
    SummaryPage.getSummaryRentForm();
    SummaryPage.getSummaryName();
    SummaryPage.getSummaryLastName();
    SummaryPage.getSummaryCardNumber();
    SummaryPage.getSummaryEmail();
})
And('I can click on Rent button', () => {
    SummaryPage.clickSummaryRentButton();
})
And('I can see alerts for empty fields', () => {
    SummaryPage.getAlertName();
    SummaryPage.getAlertLastName();
    SummaryPage.getAlertCard();
    SummaryPage.getAlertEmail();
})

And('I can put Test in Name Test in Last Name, 1234123412341234 in Card number and test@test.com in email field', () => {

    SummaryPage.setSummaryName();
    SummaryPage.setSummaryLastName();
    SummaryPage.setSummaryCardNumber();
    SummaryPage.setSummaryEmail();
})
Then('I can click on Rent button', () => {
    SummaryPage.clickSummaryRentButton();
})