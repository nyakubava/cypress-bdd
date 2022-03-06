Feature: Verify user can search car for specific countries and cities
      

    I want to search rent car for specific countries and cities

    Scenario: Search rent car for specific country and city
        Given I navigate to the website
        When I select specific Country France, City Paris, Model Mazda 3 and Pic-up and Drop-Off Dates
        And Click on Search button
        Then I can see selected rent cars for selected Country and City
       

