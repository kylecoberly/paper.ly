Feature: Display stats

  Scenario: Standard usage
    Given I am on the main page
    Then I should see these stats:
      | days remaining  | 5  |
      | rolls remaining | 10 |
      | roll rate       | 2  |
