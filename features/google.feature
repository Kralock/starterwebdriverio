Feature: Internet is awesome

  Scenario: As a user, I can search something by different behavior

    Given I am on the "https://www.google.com" page
    When I click on the accepted cookie button
    When I fill the search with "la taverne du test"
    And I select the method to search: "key"
    Then I should see the word "résultat"
    Then I should see the word "secondes"
    Then I should see the word "Environ"
    And The url should be "https://latavernedutesteur.fr"

  Scenario: As a user, I can search something by different behavior

    Given I am on the "https://www.google.com" page
    When I click on the accepted cookie button
    When I fill the search with "la taverne du test"
    And I select the method to search: "select"
    Then I should see the word "résultat"
    Then I should see the word "secondes"
    Then I should see the word "Environ"
    And The url should be "https://latavernedutesteur.fr"

  Scenario: As a user, I can search something by different behavior

    Given I am on the "https://www.google.com" page
    When I click on the accepted cookie button
    When I fill the search with "la taverne du test"
    And I select the method to search: "button"
    Then I should see the word "résultat"
    Then I should see the word "secondes"
    Then I should see the word "Environ"
    And The url should be "https://latavernedutesteur.fr"
