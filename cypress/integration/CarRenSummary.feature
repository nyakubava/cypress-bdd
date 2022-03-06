Feature: Verify if user should be able provide personal data in the rent form
      

    I want to provide personal data in the rent form

    Scenario: Verify if user should be able provide personal data in the rent form
    
        Given I navigate to the website
        When I select specific Country Poland, City Krakow, Model Skoda Octavia and Pic-up and Drop-Off Dates
        And Click on Search button
        And I can see rent car for selected Country and City
        And I click on Rent button for selected car
        And I can verify if Location is Poland, Krakow and car is Skoda Octavia
        And I can click on Rent button
        And I can see text fields for personal information
        And I can click on Rent button
        And I can see alerts for empty fields
        And I can put Test in Name Test in Last Name, 1234123412341234 in Card number and test@test.com in email field
        Then I can click on Rent button 



