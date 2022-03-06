Feature: Verify if user can get information about rented car
      

    I want to verify information about rented car

    Scenario: Verify information about rented car
        Given I navigate to the website
        When I select specific Country France, City Paris, Model Mazda 3 and Pic-up and Drop-Off Dates
        And Click on Search button
        And I can see rent car for selected Country and City
        And I click on Rent button for selected car
        Then I can verify if Location is France, Paris and car is Mazda 3 and return to the main page 



