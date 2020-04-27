Feature: Change rolls remaining

  Background:
    Given I am on the main page
    And I have 10 rolls remaining

  Scenario: Incrementing
    When I increment the rolls remaining
    Then I should see 11 rolls remaining

  Scenario: Simple Decrementing
    When I decrement the rolls remaining
    Then I should see 9 rolls remaining
