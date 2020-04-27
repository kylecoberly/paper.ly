Feature: Display stats

  Scenario: Standard usage
    Given I am on the main page
    And I have 10 rolls remaining
    And I have a roll rate of 2
    Then I should see these stats:
      | days remaining  | 5  |
      | rolls remaining | 10 |
      | roll rate       | 2  |

  Scenario: Heavy usage
    Given I am on the main page
    And I have 10 rolls remaining
    And I have a roll rate of 5
    Then I should see these stats:
      | days remaining  | 2  |
      | rolls remaining | 10 |
      | roll rate       | 5  |
