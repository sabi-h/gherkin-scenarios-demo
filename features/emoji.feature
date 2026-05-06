Feature: Todo Emoji
  As a user
  I want to see a random emoji next to each todo item
  So that my todo list feels more personal and visually distinct

  Background:
    Given I open the Todo app
    And the todo list is empty

  Scenario: Adding an item shows an emoji on the left
    When I enter "Buy groceries" in the todo input
    And I click the "Add" button
    Then I should see an emoji next to "Buy groceries"

  Scenario: Emoji persists after page reload
    Given I have a todo "Write report"
    And I should see an emoji next to "Write report"
    When I reload the page
    Then I should see an emoji next to "Write report"

  Scenario: Emoji remains visible on completed items
    Given I have a todo "Clean house"
    When I check the checkbox for "Clean house"
    Then I should see an emoji next to "Clean house"

  Scenario: Multiple items each display an emoji
    Given I have a todo "Buy groceries"
    And I have a todo "Write report"
    Then I should see an emoji next to "Buy groceries"
    And I should see an emoji next to "Write report"
